const express = require("express");
const knex = require("../../knex");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const crypto = require("crypto");
const jwt = require("jsonwebtoken"); // JWTライブラリの追加

// 別ファイルで定義した便利関数
const {
  makeHash,
  selectedUserByName,
  selectedUserById,
  verifyPassword,
} = require("./auth_method");

const authTokenServer = (app) => {
  app.use(express.json());
  app.use(express.static("public"));
  app.use(express.urlencoded({ extended: false }));

  app.use(passport.initialize());

  passport.use(
    new LocalStrategy(
      {
        usernameField: "userName",
        passwordField: "password",
      },
      async (userName, password, done) => {
        try {
          const userData = await selectedUserByName(userName);
          console.log("userData: ", userData);
          if (!userData || userData.length === 0) {
            return done(null, false, {
              message: "ユーザー名またはパスワードが異なります",
            });
          }
          const [isAuth, idArray] = await verifyPassword(userName, password);
          console.log("isAuth: ", isAuth);
          if (isAuth) {
            return done(null, userData[0]);
          } else {
            return done(null, false, {
              message: "ユーザー名またはパスワードが異なります",
            });
          }
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await selectedUserById(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // JWTトークン生成関数
  function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "1800s" });
  }

  // 認証ミドルウェア
  function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }

  // ログイン用のエンドポイント
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      const token = generateAccessToken({ id: user.id });
      res.status(200).json({ token });
    })(req, res, next);
  });

  // 認証済みユーザーのみアクセス可能なルート
  app.get("/", authenticateToken, (req, res) => {
    res.status(200).json([{ id: req.user.id }]);
  });

  // 新規ユーザー登録用のエンドポイント
  app.post("/users/new", async (req, res) => {
    const userName = req.body.userName;
    const pw = req.body.password;
    const mail = req.body.mail;

    //ユーザーネームが既存のものとかぶってないかをチェック
    let checkUniqueName;
    await knex("users")
      .where({ userName: userName })
      .select()
      .then((data) => {
        checkUniqueName = data;
      });

    if (checkUniqueName.length) {
      res.status(404).send("ユーザーネームを変えてください");
    } else {
      //新規登録するuser_idを既存のuser_idの最大から決定する
      let newId;
      await knex("users")
        .max("id as maxId")
        .then(([result]) => {
          newId = result.maxId + 1;
          return;
        });

      //パスワードのソルトを作成
      const salt = crypto.randomBytes(6).toString("hex");
      const hashedPassword = makeHash(pw, salt);

      //新規ユーザーをusersテーブルに登録する
      await knex("users").insert({
        id: newId,
        userName: userName,
        mail: mail,
        salt: salt,
        hash: hashedPassword,
        numOfAdults: 2,
        numOfChildren: 1,
        shrimp: false,
        crab: false,
        wheat: false,
        buckwheat_noodles: false,
        egg: false,
        milk: false,
        peanut: false,
      });

      //フロントに返すためにidを文字列化
      const idToFront = JSON.stringify(newId);
      res.status(200).send(idToFront);
    }
  });

  return app;
};

module.exports = { authTokenServer };
