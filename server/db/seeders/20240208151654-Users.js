"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
      {
        role: "Instructor",
        name: "Tolya",
        email: "tolya@mail.ru",
        password: await bcrypt.hash("111111", 10),
        img: "https://elbrus-api-uploads.storage.yandexcloud.net/image_160_1_99e61bd837.png",
        styleDance: "HIP-HOP",
        level: "INTERMEDIATE",
        description:
          "Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Nika",
        email: "nika@mail.ru",
        password: await bcrypt.hash("111111", 10),
        img: "https://elytsjournal.ru/upload/iblock/7a1/yeazmsxq5iinp7aoc44l25dq02nyfbkv.jpeg",
        styleDance: "K-POP",
        level: "INTERMEDIATE",
        description:
          "K-pop dance – современная южнокорейская альтернатива хип-хопу. Такой танец сочетает движения различных стилей, мощные хореографические связки и зрелищность каждого элемента.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Victor",
        email: "victor@mail.ru",
        password: await bcrypt.hash("111111", 10),
        img: "https://image.spletnik.ru/resize/fit=contain,gravity=0.5x0.5,format=auto,width=1011,height=700/https://image.spletnik.ru/image/2023/08/16/oR7g/original.webp",
        styleDance: "K-POP",
        level: "ADVANCED",
        description:
          "K-pop dance – современная южнокорейская альтернатива хип-хопу. Такой танец сочетает движения различных стилей, мощные хореографические связки и зрелищность каждого элемента.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Dancer",
        name: "Julia",
        email: "julia@mail.ru",
        password: await bcrypt.hash("111111", 10),
        img: "https://www.film.ru/sites/default/files/people/1455652-2184617.jpg",
        styleDance: "K-POP",
        level: "BEGINNER",
        description: "Я учусь танцевать",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Users", users);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  },
};
