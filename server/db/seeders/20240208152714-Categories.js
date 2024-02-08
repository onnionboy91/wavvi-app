"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [
      {
        name: "HIP-HOP",
        img: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BREAK_DANCE",
        img: "https://img.redbull.com/images/c_crop,w_3200,h_1600,x_0,y_533,f_auto,q_auto/c_scale,w_1200/redbullcom/2019/10/11/8e9ca35b-f25c-426a-bb40-338feabff9cb/world-urban-games-2019-shigekix-chairfreeze",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "K-POP",
        img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iJ9u3uXJeBtU/v0/-1x-1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "VOGUE",
        img: "https://huarache-shop.ru/800/600/https/w-dog.ru/wallpapers/0/32/493567794025256/ciara-kolgotki-popka-nozhki.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JazzFunk",
        img: "https://labocadance.ru/wp-content/uploads/2015/04/Jazz-Funk.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "SalSa",
        img: "https://godance.tv/sites/default/files/taxonomy/salsa_istoriya_vozniknoveniya_vidy_i_0.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert("Categories", categories);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories");
  },
};
