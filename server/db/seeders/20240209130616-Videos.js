"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const videos = [
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      
    ];

    await queryInterface.bulkInsert("Videos", videos);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Videos");
  },
};

