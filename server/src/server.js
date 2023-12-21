const express = require("express");
const path = require("path");
// passportが使えるように追加
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const knex = require("../knex.js");

const setupServer = () => {
  const app = express();
  app.use(express.json());
  // publicフォルダにアクセスできるように設定
  app.use(express.static("public"));

  app.get("/", (req, res) => {
    res.status(200);
    res.send("connect");
    // res.sendFile("/index.html");
  });

  app.get("/api/v1/recipes", async (req, res) => {
    // [FIXME] DBにデータがない場合ランダムで選択する処理が足りていない
    const userId = 1; //[FIXME]: userIdは現状決め打ち
    const kondate = await knex("menus")
      .join("images", "menus.id", "=", "images.id")
      .select()
      .where("userId", `${userId}`);

    // 日付のarrを作る
    const dateList = [];

    kondate.forEach((item) => {
      const selectDate = item.date.toLocaleDateString();
      // const selectDate = item.date.split("T")[0];
      if (!dateList.includes(selectDate)) {
        dateList.push(selectDate);
      }
    });
    console.log("dateList: ", dateList);

    const result = [];

    dateList.map((date, index) => {
      const returnObj = {};
      returnObj.id = index + 1;
      returnObj.date = date;

      const filteredKondate = kondate.filter(
        (item) => item.date.toLocaleDateString() === date
      );
      returnObj.food = filteredKondate;
      result.push(returnObj);
    });

    res.status(200);
    res.send(result);
  });

  app.get("/error", (req, res) => {
    res.render("pages/error");
  });
  return app;
};
module.exports = { setupServer };
