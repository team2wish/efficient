const express = require("express");
const knex = require("../knex.js");
// token認証用のファイルを連れてきた
const { authTokenServer } = require("./authenticate/auth_token");
const { staticServer } = require("./static");

const setupServer = () => {
  const app = express();
  app.use(express.json());
  // publicフォルダにアクセスできるように設定
  app.use(express.static("public"));

  authTokenServer(app);
  staticServer(app);

  return app;
};
module.exports = { setupServer };
