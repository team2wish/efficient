/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//ダミーデータのパスワードを設定
const pw1 = "pw1";
const pw2 = "pw2";
const pw3 = "pw3";

//crypto：SHA256を含む暗号化、復号化アルゴリズムを使えるnode.jsのモジュール
const crypto = require("crypto");

//パスワードのソルトを作成
const salt1 = crypto.randomBytes(6).toString("hex");
const salt2 = crypto.randomBytes(6).toString("hex");
const salt3 = crypto.randomBytes(6).toString("hex");

//ソルトをパスワードに付け加える
const salt1AndPw1 = salt1 + pw1;
const salt2AndPw2 = salt2 + pw2;
const salt3AndPw3 = salt3 + pw3;

//SHA-256を使って、ハッシュ・オブジェクトを作成
const hash1 = crypto.createHash("sha256");
const hash2 = crypto.createHash("sha256");
const hash3 = crypto.createHash("sha256");

//上記で作成したハッシュ値で更新して、最後にdigest()で取り出す
const hashedPassword1 = hash1.update(salt1AndPw1).digest("hex");
const hashedPassword2 = hash2.update(salt2AndPw2).digest("hex");
const hashedPassword3 = hash3.update(salt3AndPw3).digest("hex");

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          userName: "user1",
          mail: "test1@test",
          salt: salt1,
          hash: hashedPassword1,
          numOfAdults: 2,
          numOfChildren: 1,
          shrimp: false,
          crab: false,
          wheat: false,
          buckwheat_noodles: false,
          egg: false,
          milk: false,
          peanut: false,
        },
        {
          id: 2,
          userName: "user2",
          mail: "test2@test",
          salt: salt2,
          hash: hashedPassword2,
          numOfAdults: 2,
          numOfChildren: 1,
          shrimp: false,
          crab: false,
          wheat: false,
          buckwheat_noodles: false,
          egg: false,
          milk: false,
          peanut: false,
        },
        {
          id: 3,
          userName: "user3",
          mail: "test3@test",
          salt: salt3,
          hash: hashedPassword3,
          numOfAdults: 2,
          numOfChildren: 1,
          shrimp: false,
          crab: false,
          wheat: false,
          buckwheat_noodles: false,
          egg: false,
          milk: false,
          peanut: false,
        },
      ]);
    });
};
