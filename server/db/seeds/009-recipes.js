/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex("recipes")
    .del()
    .then(function () {
      return knex("recipes").insert([
        {
          foodId: 1,
          text: "米を研ぎ、炊飯する。",
          imageId: 29,
          kindId: 1,
          workTime: 35,
          canWrap: true,
        },
        {
          foodId: 2,
          text: "キャベツを千切りにする",
          imageId: 22,
          kindId: 2,
          workTime: 5,
          canWrap: false,
        },
        {
          foodId: 2,
          text: "豚ロースに薄力粉をまぶす",
          imageId: 24,
          kindId: 8,
          workTime: 5,
          canWrap: false,
        },
        {
          foodId: 2,
          text: "醤油大さじ2、すりおろし生姜大さじ2、砂糖大さじ1、酒大さじ1を混ぜ合わせて合わせ調味料を作る",
          imageId: 25,
          kindId: 9,
          workTime: 5,
          canWrap: false,
        },
        {
          foodId: 2,
          text: "フライパンに胡麻油を引き、豚肉を入れて焼き色がつくまで焼きます。",
          imageId: 26,
          kindId: 17,
          workTime: 6,
          canWrap: true,
        },
        {
          foodId: 2,
          text: "合わせ調味料を入れて味をつけます",
          imageId: 27,
          kindId: 18,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 2,
          text: "中火で炒め合わせ全体に味が馴染んだら火から下ろします",
          imageId: 28,
          kindId: 21,
          workTime: 5,
          canWrap: false,
        },
        {
          foodId: 2,
          text: "お皿に盛り付けます",
          imageId: 23,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 3,
          text: "なすとピーマンを一口大の乱切りにする",
          imageId: 17,
          kindId: 3,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 3,
          text: "味噌、麺つゆ、酒、みりん を大さじ１づつを加えた合わせ調味料を作る",
          imageId: 21,
          kindId: 9,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 3,
          text: "フライパンにごま油を中火で熱し、豚ひき肉を炒める。",
          imageId: 18,
          kindId: 19,
          workTime: 2,
          canWrap: true,
        },
        {
          foodId: 3,
          text: "塩胡椒、なす、ピーマンを入れる",
          imageId: 20,
          kindId: 20,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 3,
          text: "再度炒める",
          imageId: 19,
          kindId: 21,
          workTime: 3,
          canWrap: true,
        },
        {
          foodId: 3,
          text: "合わせ調味料を入れて全体を絡める",
          imageId: 19,
          kindId: 22,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 3,
          text: "お皿に盛り付けます",
          imageId: 16,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 7,
          text: "小松菜を4cmの長さで切り、洗っておく",
          imageId: 14,
          kindId: 3,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 7,
          text: "フライパンにオリーブオイルを中火で熱し、小松菜とじゃこを炒める",
          imageId: 15,
          kindId: 19,
          workTime: 3,
          canWrap: true,
        },
        {
          foodId: 7,
          text: "醤油をふって、粉チーズを絡める",
          imageId: 15,
          kindId: 22,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 7,
          text: "お皿に盛り付けます",
          imageId: 13,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 8,
          text: "トマトとアボカドを切る。トマトは洗っておく。",
          imageId: 32,
          kindId: 3,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 8,
          text: "胡麻油と醤油でトマトとアボカドを和える",
          imageId: 12,
          kindId: 25,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 12,
          text: "玉ねぎを薄切りにする",
          imageId: 3,
          kindId: 2,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 12,
          text: "鍋に水、玉ねぎ、わかめ、白だし（2倍希釈）大さじ3を加えて火にかける",
          imageId: 4,
          kindId: 6,
          workTime: 6,
          canWrap: true,
        },
        {
          foodId: 12,
          text: "火を止めて味噌大さじ１をとき入れる",
          imageId: 5,
          kindId: 12,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 13,
          text: "ブロッコリーは粗めに刻む。しめじは石づきを切ってほぐす",
          imageId: 6,
          kindId: 3,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 13,
          text: "鍋に水1/2カップを入れて中火にかけ、沸騰したらブロッコリー、しめじ、コンソメを加える",
          imageId: 7,
          kindId: 10,
          workTime: 3,
          canWrap: true,
        },
        {
          foodId: 13,
          text: "豆乳1カップ、しょうゆ1/2、胡椒を入れて温める",
          imageId: 8,
          kindId: 12,
          workTime: 2,
          canWrap: true,
        },
        {
          foodId: 13,
          text: "器に盛り、粉チーズをふる",
          imageId: 1,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "鶏肉はひと口大に切る",
          imageId: 46,
          kindId: 4,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "蓮根を乱切りにする",
          imageId: 47,
          kindId: 3,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "にんじんを乱切りにする",
          imageId: 48,
          kindId: 3,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "ごぼうは皮をこそいで乱切りにし、水にさらす。",
          imageId: 49,
          kindId: 3,
          workTime: 3,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "しいたけは石づきをとって半分に切る",
          imageId: 50,
          kindId: 3,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "こんにゃくはスプーンでひと口大にちぎる",
          imageId: 45,
          kindId: 3,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "こんにゃくを下茹でする",
          imageId: 51,
          kindId: 5,
          workTime: 4,
          canWrap: true,
        },
        {
          foodId: 5,
          text: "フライパンに油を中火で熱して鶏肉を炒める",
          imageId: 52,
          kindId: 19,
          workTime: 3,
          canWrap: true,
        },
        {
          foodId: 5,
          text: "肉の色が変わってきたら、れんこん、にんじん、ごぼうを加えて炒め合わせる",
          imageId: 53,
          kindId: 21,
          workTime: 5,
          canWrap: true,
        },
        {
          foodId: 5,
          text: "醤油大さじ2、みりん大さじ2、砂糖大さじ1、水200mlを加える",
          imageId: 57,
          kindId: 22,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 5,
          text: "生椎茸、こんにゃくを加えてアルミホイルなどで落とし蓋をし、中火で10分煮る。",
          imageId: 58,
          kindId: 23,
          workTime: 10,
          canWrap: true,
        },
        {
          foodId: 5,
          text: "お皿に盛り付けます",
          imageId: 34,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 11,
          text: "キャベツを一口大にちぎって、ポリ袋に入れてください",
          imageId: 39,
          kindId: 3,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 11,
          text: "白だし大さじ2、ごま油大さじ2、酢小さじ1、砂糖小さじ1、すりおろしにんにく(チューブ)小さじ1を順に加えて10分ほど置いてください。",
          imageId: 40,
          kindId: 8,
          workTime: 2,
          canWrap: true,
        },
        {
          foodId: 11,
          text: "お皿に盛り付けていりごまをちらして完成です",
          imageId: 41,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 10,
          text: "豆苗の根を落とすように切ってください",
          imageId: 42,
          kindId: 3,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 10,
          text: "3カップのお湯を沸かし、先ほど切った豆苗を30秒ほど茹でてください",
          imageId: 43,
          kindId: 23,
          workTime: 5,
          canWrap: true,
        },
        {
          foodId: 10,
          text: "水気をしっかり切って焼き肉のタレを大さじ２加えて軽く和えてください",
          imageId: 44,
          kindId: 25,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 10,
          text: "お皿に盛り付けて完成です",
          imageId: 37,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 9,
          text: "長芋の皮を剥きます",
          imageId: 54,
          kindId: 3,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 9,
          text: "長芋を荒く刻みます",
          imageId: 55,
          kindId: 3,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 9,
          text: "まぐろを2cm角に切ってください",
          imageId: 56,
          kindId: 27,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 9,
          text: "まぐろに大さじ1の醤油を加えて絡めてください",
          imageId: 44,
          kindId: 8,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 9,
          text: "器に盛り付け、お好みで練りわさび、醤油を加えてください",
          imageId: 36,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 6,
          text: "鶏肉を一口大に切る",
          imageId: 46,
          kindId: 4,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 6,
          text: "ポリ袋に鶏肉、醤油大さじ1、酒大さじ1、すりおろし生姜小さじ1/2、すりおろしにんにく小さじ1/2、胡椒少々を入れ、10分漬け込む。",
          imageId: 59,
          kindId: 8,
          workTime: 10,
          canWrap: true,
        },
        {
          foodId: 6,
          text: "鶏肉の水気をきり、片栗粉をまぶす",
          imageId: 60,
          kindId: 28,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 6,
          text: "170度の揚げ油で3 ～ 4 分揚げる。",
          imageId: 61,
          kindId: 13,
          workTime: 4,
          canWrap: true,
        },
        {
          foodId: 6,
          text: "お皿に盛り付けます",
          imageId: 35,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "鍋に卵が浸かるくらい水を入れ、お湯を沸かす",
          imageId: 62,
          kindId: 7,
          workTime: 3,
          canWrap: true,
        },
        {
          foodId: 4,
          text: "鍋に卵を入れ、9分間茹でる",
          imageId: 63,
          kindId: 10,
          workTime: 9,
          canWrap: true,
        },
        {
          foodId: 4,
          text: "青ネギを小口切りする",
          imageId: 71,
          kindId: 3,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "ボウルにゆで卵を入れてフォークでつぶし、マヨネーズ大さじ1を加える",
          imageId: 64,
          kindId: 12,
          workTime: 2,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "ポリ袋に鶏肉を入れ、塩・胡椒を少々、酒小さじ2を加えて揉み込む",
          imageId: 65,
          kindId: 8,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "下味をつけた鶏肉に、片栗粉大さじ３を加え、ざっとまぶす",
          imageId: 66,
          kindId: 12,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "フライパンに油を中火で熱し、鶏肉の皮目を下にして入れ、片面３分３０秒ずつ、計７分を目安に焼く",
          imageId: 67,
          kindId: 17,
          workTime: 7,
          canWrap: true,
        },
        {
          foodId: 4,
          text: "鶏肉に火が通ったら、いったん取り出し食べやすい大きさに切る。",
          imageId: 68,
          kindId: 18,
          workTime: 3,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "フライパンの余分な油をキッチンペーパーで拭き取り、めんつゆ大さじ2、酢大さじ1、砂糖小さじ1を入れて中火にかける。",
          imageId: 69,
          kindId: 18,
          workTime: 3,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "沸騰したら鶏肉を戻し入れてから絡める",
          imageId: 70,
          kindId: 20,
          workTime: 1,
          canWrap: false,
        },
        {
          foodId: 4,
          text: "器に盛り、簡単タルタルソースをかけ、青ネギをちらす",
          imageId: 33,
          kindId: 26,
          workTime: 1,
          canWrap: false,
        },
      ]);
    });
};
