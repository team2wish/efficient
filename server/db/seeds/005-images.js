/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("images").del();
  await knex("images").insert([
    { id: 1, imagePath: "to-nyu-soup.png" },
    { id: 2, imagePath: "onion-wakame-soup.png" },
    { id: 3, imagePath: "usugiri-onion.png" },
    { id: 4, imagePath: "futtou-onion.png" },
    { id: 5, imagePath: "moso-tokashi.png" },
    { id: 6, imagePath: "simeji-saku.png" },
    { id: 7, imagePath: "slice-broccoli.png" },
    { id: 8, imagePath: "to-nyu-tuika.png" },
    { id: 9, imagePath: "avocado-tomato.png" },
    { id: 10, imagePath: "cut-abocado.png" },
    { id: 11, imagePath: "cut-tomato.png" },
    { id: 12, imagePath: "aeru-abocado-tomato.png" },
    { id: 13, imagePath: "komatsuna-ae.png" },
    { id: 14, imagePath: "komatsuna-cut.png" },
    { id: 15, imagePath: "aeru-comatsuna-jako.png" },
    { id: 16, imagePath: "nasu-pi-mann-amazuitame.png" },
    { id: 17, imagePath: "nasu-pi-man-cut.png" },
    { id: 18, imagePath: "buta-hikiniku-itame.png" },
    { id: 19, imagePath: "nasu-pi-man-itameawase.png" },
    { id: 20, imagePath: "nasu-pi-mann-suyaki.png" },
    { id: 21, imagePath: "amazumiso-awase.png" },
    { id: 22, imagePath: "cabbage-slice.png" },
    { id: 23, imagePath: "pork-ginger.png" },
    { id: 24, imagePath: "flour-on-pork.png" },
    { id: 25, imagePath: "pork-ginger-source.png" },
    { id: 26, imagePath: "roast-pork.png" },
    { id: 27, imagePath: "pork-add-sause.png" },
    { id: 28, imagePath: "blend-flavors-pork.png" },
    { id: 29, imagePath: "rice_wash.jpeg" },
    { id: 30, imagePath: "rice.jpeg" },
    { id: 31, imagePath: "gohan.jpeg" },
    { id: 32, imagePath: "cut-abocado-tomato.png" },
    { id: 33, imagePath: "chicken-nanban.png" },
    { id: 34, imagePath: "tikuzenni.png" },
    { id: 35, imagePath: "karaage.png" },
    { id: 36, imagePath: "tuna_nagaimo_with_wasabi.png" },
    { id: 37, imagePath: "tomyo_namuru.png" },
    { id: 38, imagePath: "mugen_kyabetsu.png" },
  ]);
};
