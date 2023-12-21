/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex("cook_kinds")
    .del()
    .then(function () {
      return knex("cook_kinds").insert([
        { id: 1, kindName: "炊飯する", priority: 1 },
        { id: 2, kindName: "切らずに水の中に入れる", priority: 2 },
        { id: 3, kindName: "野菜を切る", priority: 3 },
        { id: 4, kindName: "肉を切る", priority: 4 },
        { id: 5, kindName: "アクを抜く", priority: 5 },
        { id: 6, kindName: "切ってから水の中に入れる", priority: 6 },
        { id: 7, kindName: "お湯を沸かす", priority: 7 },
        { id: 8, kindName: "下味をつける", priority: 8 },
        { id: 9, kindName: "合わせ調味料を作る", priority: 9 },
        { id: 10, kindName: "お湯が沸いてから具材を投入する", priority: 10 },
        { id: 11, kindName: "アクを抜いた食材を投入する", priority: 11 },
        { id: 12, kindName: "味付けをする", priority: 12 },
        { id: 13, kindName: "油で揚げる", priority: 13 },
        { id: 14, kindName: "味を整える", priority: 14 },
        { id: 15, kindName: "蒸す", priority: 15 },
        { id: 16, kindName: "味を整える", priority: 16 },
        { id: 17, kindName: "焼く", priority: 17 },
        { id: 18, kindName: "味を整える", priority: 18 },
        { id: 19, kindName: "炒める", priority: 19 },
        { id: 20, kindName: "混ぜ合わせる", priority: 20 },
        { id: 21, kindName: "再度炒める", priority: 21 },
        { id: 22, kindName: "味を整える", priority: 22 },
        { id: 23, kindName: "茹でる", priority: 23 },
        { id: 24, kindName: "味を整える", priority: 24 },
        { id: 25, kindName: "和える", priority: 25 },
        { id: 26, kindName: "盛り付ける", priority: 26 },
      ]);
    });
};
