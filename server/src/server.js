const express = require("express");
const path = require("path");
// passportが使えるように追加
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

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

  app.get("/error", (req, res) => {
    res.render("pages/error");
  });
  return app;
};
module.exports = { setupServer };
