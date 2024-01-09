const express = require("express");
const session = require("express-session");
const knex = require("../../knex");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const crypto = require("crypto");

// 別ファイルで便利関数定義したのでimport
const {
  makeHash,
  selectedUserByName,
  selectedUserById,
  verifyPassword,
} = require("./auth_method");

const authServer = (app) => {
  // passport.js用定義
  app.use(express.json());
  app.use(express.static("public"));

  app.use(express.urlencoded({ extended: false }));
  app.use(
    session({
      secret: "secret",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // 本番環境ではHTTPSを使用する
        maxAge: 24 * 60 * 60 * 1000, // クッキーの有効期限（例：24時間）
      },
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      {
        usernameField: "user_name",
        passwordField: "password",
      },
      async (userName, password, done) => {
        try {
          const userData = await selectedUserByName(userName);
          if (!userData || userData.length === 0) {
            return done(null, false, {
              message: "ユーザー名またはパスワードが異なります",
            });
          }
          const [isAuth, idArray] = await verifyPassword(userName, password);
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
  // passport.js 準備ここまで

  // ログイン用のエンドポイント
  app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        return res.status(500).json({ message: "Internal Server Error" });
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      req.logIn(user, (loginErr) => {
        if (loginErr) {
          return res.status(500).json({ message: "Login failed" });
        }
        const idArray = [{ id: user.id }];
        return res.status(200).send(idArray);
      });
    })(req, res, next);
  });

  // rootを叩いたときにCookie認証済みか判定
  // Cookie認証が取れない場合/loginにリダイレクトさせる
  app.get("/", (req, res) => {
    if (req.isAuthenticated() && req.user) {
      res.status(200).json([{ id: req.user[0].id }]);
    } else {
      res.redirect("/login");
    }
  });

  // user新規登録用
  app.post("/users/new", async (req, res) => {
    const userName = req.body.user_name;
    const pw = req.body.password;

    //ユーザーネームが既存のものとかぶってないかをチェック
    let checkUniqueName;
    await knex("users")
      .where({ user_name: userName })
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
        .max("user_id as maxId")
        .then(([result]) => {
          newId = result.maxId + 1;
          return;
        });

      //パスワードのソルトを作成
      const salt = crypto.randomBytes(6).toString("hex");
      const hashedPassword = makeHash(pw, salt);

      //新規ユーザーをusersテーブルに登録する
      await knex("users").insert({
        user_name: userName,
        user_id: newId,
        pw_hash: hashedPassword,
        pw_salt: salt,
      });

      //フロントに返すためにidを文字列化
      const idToFront = JSON.stringify(newId);
      res.status(200).send(idToFront);
    }
  });

  return app;
};
module.exports = { authServer };
