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
  });

  app.put(
    "/api/v1/recipes/:year/:month/:date/:beforeFoodId/:afterFoodId",
    async (req, res) => {
      // date, beforeFoodIdを使ってwhere句で絞る
      const isSuccess = await knex("menus")
        .where(
          "menus.date",
          `${req.params.year}/${req.params.month}/${req.params.date}`
        )
        .where("menus.foodId", `${req.params.beforeFoodId}`)
        // afterFoodIdを使って値を変更する
        .update({
          foodId: req.params.afterFoodId,
        });

      // 確認用
      // const afterData = await knex("menus")
      //   .where(
      //     "menus.date",
      //     `${req.params.year}/${req.params.month}/${req.params.date}`
      //   )
      //   .where("menus.foodId", `${req.params.afterFoodId}`);
      // console.log("afterData: ", afterData);

      if (isSuccess === 1) {
        res.status(200);
        res.send("メニューの変更が完了しました");
      } else {
        res.status(500);
        res.send("変更にエラーが発生しました");
      }
    }
  );

  app.get("/api/v1/recipes/search/:category", async (req, res) => {
    // console.log("req.params.category", req.params.category);

    const getParams = req.params.category;
    // カテゴリーに一致するfoodsを取得
    const getCategoryList = await knex("foods")
      .select("foods.*", "images.imagePath")
      .where(getParams, true)
      .join("images", "images.id", "=", "foods.pictPathId");

    // [FIXME]: timeはテーブル修正後にちゃんと出す。今は１５分のダミー
    const result = getCategoryList.map((elem) => {
      return {
        foodId: elem.id,
        name: elem.name,
        category: getParams,
        imagePath: elem.imagePath.split(".")[0],
        time: 15,
      };
    });

    res.status(200);
    res.send(result);
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
      .select("foods.*", "images.*")
      .join("images", "foods.pictPathId", "=", "images.id")
      .whereIn("foods.id", foodIdArr);

    function imagePathSelector(num) {
      const selectObj = foodsImgArr.filter((elem) => elem.id === num);
      return selectObj[0].imagePath;
    }
    // 4.foodIdから調理手順を取得する(このときにjoinが必要になるはず)
    // 5.各料理の調理手順を全てつなげる
    const foodsDataArr = await knex("foods")
      .select("foods.*", "recipes.*", "cook_kinds.*", "images.*")
      .whereIn("foodId", foodIdArr)
      .join("recipes", "foods.id", "=", "recipes.foodId")
      .join("cook_kinds", "recipes.kindId", "=", "cook_kinds.id")
      .join("images", "imageId", "=", "images.id");

    // 6.優先順位を使ってソートする
    const sortFoodsData = foodsDataArr.sort((a, b) => a.priority - b.priority);
    // 7.client所望の形でレスポンスを返す
    const cookProcess = [];
    sortFoodsData.map((elm) => {
      const resultObj = {};
      resultObj.name = elm.name;
      resultObj.text = elm.text;
      resultObj.workTime = elm.workTime;
      resultObj.imagePath = elm.imagePath.split(".")[0];
      resultObj.completedDishImage = imagePathSelector(elm.pictPathId).split(
        "."
      )[0];

      cookProcess.push(resultObj);
    });

    res.status(200);
    res.send(cookProcess);
  });

  // 5日分の献立を返す
  app.get("/api/v1/recipes/all", async (req, res) => {
    // [FIXME] DBにデータがない場合ランダムで選択する処理が足りていない
    const userId = 1; //[FIXME]: userIdは現状決め打ち
    const kondate = await knex("menus")
      .join("images", "menus.id", "=", "images.id")
      .join("foods", "menus.foodId", "=", "foods.id")
      .select()
      .where("userId", `${userId}`);

    // 日付のarrを作る
    const dateList = [];

    kondate.forEach((item) => {
      const selectDate = item.date.toLocaleDateString();
      if (!dateList.includes(selectDate)) {
        dateList.push(selectDate);
      }
    });

    const result = [];

    dateList.map((date, index) => {
      const returnObj = {};
      returnObj.id = index + 1;
      returnObj.date = date;

      const filteredKondate = kondate.filter(
        (item) => item.date.toLocaleDateString() === date
      );

      const resFoodValueArr = filteredKondate.map((elem) => {
        let selectCategory = "";
        if (elem.isMain) {
          selectCategory = "isMain";
        } else if (elem.isSide) {
          selectCategory = "isSide";
        } else if (elem.isSoup) {
          selectCategory = "isSoup";
        } else if (elem.isRice) {
          selectCategory = "isRice";
        }

        return {
          id: elem.foodId,
          category: selectCategory,
          name: elem.name,
          imagePath: elem.imagePath.split(".")[0],
          timingFlag: elem.timingFlag,
        };
      });
      console.log("resFoodValueArr: =====", resFoodValueArr);
      returnObj.food = resFoodValueArr;

      result.push(returnObj);
    });

    res.status(200);
    res.send(result);
  });

  app.get("/api/v1/shopping", async (req, res) => {
    // ０.frontからどの週のデータがみたいのか確認する。無いなら強制的に今週にしちゃう。
    // FIXME: 決め打ちで2023/12/18の週だけ表示にしておくが週ごとの表示が欲しくなるはず
    const startWeek = "2023/12/18";
    const groupArr = [
      "menus.id",
      "ingredient_list.genreId",
      "ingredient_list.name",
      "quantity",
      "unit",
    ];

    // １.いっぱいテーブルつなげる
    const joinData = await knex("menus")
      .join("foods", "menus.foodId", "=", "foods.id")
      .join("ingredients", "ingredients.foodId", "=", "foods.id")
      .join(
        "ingredient_list",
        "ingredients.ingredientId",
        "=",
        "ingredient_list.id"
      )
      .join("store_area", "ingredient_list.genreId", "=", "store_area.id")
      // ２.その週のデータで絞る
      .where("menus.startWeek", startWeek)
      // ３.ストアの商品カテゴリーごとにまとめる
      .groupBy(groupArr)
      .select(groupArr);
    // .groupBy([
    //   "menus.id",
    //   "foods.id",
    //   "ingredients.id",
    //   "ingredient_list.id",
    //   "store_area.id",
    //   "ingredient_list.genreId",
    // ]);

    console.log("joinData: ", joinData);

    // 仮の値を設定。実際のアプリケーションでは動的に値を設定してください。
    const specificStartWeek = "2023-12-18"; // 特定の週の日付

    const shoppingList = await knex("menus")
      .join("foods", "menus.foodId", "foods.id")
      .join("ingredients", "foods.id", "ingredients.foodId")
      .join("ingredient_list", "ingredients.ingredientId", "ingredient_list.id")
      .join("store_area", "ingredient_list.genreId", "store_area.id")
      .select(
        "store_area.name as store_section",
        "ingredient_list.name as ingredient_name",
        knex.raw("SUM(ingredients.quantity) as total_quantity"),
        "ingredients.unit"
      )
      .where("menus.startWeek", specificStartWeek) // 特定の週を基準にフィルタリング
      .groupBy(
        "store_area.id",
        "store_section",
        "ingredient_name",
        "ingredients.unit"
      ) // グループ化
      .orderBy("store_area.id", "ingredient_name"); // 並び替え
    // .orderBy("store_section", "ingredient_name"); // 並び替え

    // 結果を表示または操作
    // console.log("shoppingList: ", shoppingList);

    // ４.人参 などの材料の必要量を合計する
    // ５.リストにしてデータを返してあげる
    // 多分、[{category:"青果", items:[{"🍎": "1個", ...}]}, {category:…以下略}] みたいな形な気がする
    res.status(200);
    res.send(joinData);
  });

  app.get("/error", (req, res) => {
    res.render("pages/error");
  });
  return app;
};
module.exports = { setupServer };
