/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("foods").del();
  await knex("foods").insert([
    {
      id: 1,
      name: "ご飯",
      isMain: false,
      isSide: false,
      isSoup: false,
      isRice: true,
      categoryId: 62,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 31,
      totalTime: 35,
    },
    {
      id: 2,
      name: "生姜焼き",
      isMain: true,
      isSide: false,
      isSoup: false,
      isRice: false,
      categoryId: 2,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 23,
      totalTime: 28,
    },
    {
      id: 3,
      name: "なすとピーマンの甘味噌そぼろ炒め",
      isMain: true,
      isSide: false,
      isSoup: false,
      isRice: false,
      categoryId: 24,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 16,
      totalTime: 11,
    },
    {
      id: 4,
      name: "フライパンチキン南蛮",
      isMain: true,
      isSide: false,
      isSoup: false,
      isRice: false,
      categoryId: 3,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 33,
      totalTime: 15,
    },
    {
      id: 5,
      name: "筑前煮",
      isMain: true,
      isSide: false,
      isSoup: false,
      isRice: false,
      categoryId: 63,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 34,
      totalTime: 25,
    },
    {
      id: 6,
      name: "唐揚げ",
      isMain: true,
      isSide: false,
      isSoup: false,
      isRice: false,
      categoryId: 3,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 35,
      totalTime: 30,
    },
    {
      id: 7,
      name: "小松菜のじゃこチーズ炒め",
      isMain: false,
      isSide: true,
      isSoup: false,
      isRice: false,
      categoryId: 34,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: true,
      milk: false,
      peanut: false,
      pictPathId: 13,
      totalTime: 6,
    },
    {
      id: 8,
      name: "ミニトマトのアボカド和え",
      isMain: false,
      isSide: true,
      isSoup: false,
      isRice: false,
      categoryId: 37,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 9,
      totalTime: 8,
    },
    {
      id: 9,
      name: "漬けマグロと長芋のわさびあえ",
      isMain: false,
      isSide: true,
      isSoup: false,
      isRice: false,
      categoryId: 13,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 36,
      totalTime: 5,
    },
    {
      id: 10,
      name: "豆苗のナムル",
      isMain: false,
      isSide: true,
      isSoup: false,
      isRice: false,
      categoryId: 45,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 37,
      totalTime: 10,
    },
    {
      id: 11,
      name: "無限キャベツ",
      isMain: false,
      isSide: true,
      isSoup: false,
      isRice: false,
      categoryId: 30,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 38,
      totalTime: 15,
    },
    {
      id: 12,
      name: "玉ねぎとわかめのお味噌汁",
      isMain: false,
      isSide: false,
      isSoup: true,
      isRice: false,
      categoryId: 38,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 2,
      totalTime: 9,
    },
    {
      id: 13,
      name: "野菜ときのこの豆乳スープ",
      isMain: false,
      isSide: false,
      isSoup: true,
      isRice: false,
      categoryId: 44,
      shrimp: false,
      crab: false,
      wheat: false,
      buckwheat_noodles: false,
      egg: false,
      milk: false,
      peanut: false,
      pictPathId: 1,
      totalTime: 8,
    },
  ]);
};
