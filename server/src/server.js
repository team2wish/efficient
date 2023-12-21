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

  // 最適化された手順を返す
  app.get("/api/v1/cooking", async (req, res) => {
    // 1.今日の日付を判定する
    const today = new Date().toLocaleDateString();

    // 2.menusテーブルから今日の日付の料理をフィルタリングする
    const todaysMenu = await knex("menus").select();
    const filteredMenu = todaysMenu.filter(
      (item) => item.date.toLocaleDateString() === today
    );
    // 3.フィルタリングされた料理のfoodIdを取得する
    const foodIdArr = filteredMenu.map((elem) => elem.foodId);

    // 完成品の料理パスを取得
    const foodsImgArr = await knex("foods")
      .select()
      .join("images", "foods.pictPathId", "=", "images.id")
      .whereIn("foods.id", foodIdArr);

    // console.log("foodsImgArr: ", foodsImgArr);

    function imagePathSelector(num) {
      // console.log("num: ", num);
      const selectObj = foodsImgArr.filter((elem) => elem.id === num);
      // console.log("selectObj: ", selectObj);
      return selectObj[0].imagePath;
    }
    // 4.foodIdから調理手順を取得する(このときにjoinが必要になるはず)
    // 5.各料理の調理手順を全てつなげる
    const foodsDataArr = await knex("foods")
      .select()
      .whereIn("foodId", foodIdArr)
      .join("recipes", "foods.id", "=", "recipes.foodId")
      .join("cook_kinds", "recipes.kindId", "=", "cook_kinds.id")
      .join("images", "imageId", "=", "images.id");
    // console.log("foodsDataArr: ", foodsDataArr);

    // 6.優先順位を使ってソートする
    const sortFoodsData = foodsDataArr.sort((a, b) => a.priority - b.priority);
    // console.log("sortFoodsData:", sortFoodsData);
    // 7.client所望の形でレスポンスを返す
    // name,text,workTime,imagePath
    const cookProcess = [];
    sortFoodsData.map((elm) => {
      const resultObj = {};
      resultObj.name = elm.name;
      resultObj.text = elm.text;
      resultObj.workTime = elm.workTime;
      resultObj.imagePath = `../assets/testRecipeImg/${elm.imagePath}`;
      resultObj.completedDishImage = imagePathSelector(elm.pictPathId);

      cookProcess.push(resultObj);
    });
    // console.log("cookProcess:", cookProcess);
    // "../assets/testRecipeImg/~~"

    res.status(200);
    res.send(cookProcess);
    // res.sendFile("/index.html");
  });

  // 5日分の献立を返す
  app.get("/api/v1/recipes", async (req, res) => {
    // [FIXME] DBにデータがない場合ランダムで選択する処理が足りていない
    const userId = 1; //[FIXME]: userIdは現状決め打ち
    const kondate = await knex("menus")
      .join("images", "menus.id", "=", "images.id")
      // .join("recipes", "menus.foodId", "=", "recipes.foodId")
      .select()
      .where("userId", `${userId}`);

    // console.log("kondate:", kondate);
    // 日付のarrを作る
    const dateList = [];

    kondate.forEach((item) => {
      const selectDate = item.date.toLocaleDateString();
      if (!dateList.includes(selectDate)) {
        dateList.push(selectDate);
      }
    });
    // console.log("dateList: ", dateList);

    const result = [];

    dateList.map((date, index) => {
      const returnObj = {};
      returnObj.id = index + 1;
      returnObj.date = date;

      const filteredKondate = kondate.filter(
        (item) => item.date.toLocaleDateString() === date
      );
      returnObj.food = filteredKondate;

      // console.log("filteredKondate", filteredKondate);
      // const totalWorkTime = kondate.workTime.reduce((acc, cur) => acc + cur);
      // returnObj.workTime = totalWorkTime;
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
