"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const videos = [
      {
        name: "How to do the Criss Cross (Hip Hop Dance Moves Tutorial)",
        level:'BEGINNER',
        content: "https://www.youtube.com/embed/eg-3ybiL6UI?si=V1iiAWIFZs7O2H7s",
        img: 'https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/ad529cd8434/82911a81e4b77ff84f257/1532615051_image.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "How to Shuffle (Dance Moves Tutorial)",
        level:'MEDIUM',
        content: "https://www.youtube.com/embed/yBZ0Y2t0ceo?si=fYvrTEcCjEDWtb64",
        img: 'https://www.danceresourcecenter.org/wp-content/uploads/2023/09/Screen-Shot-2023-09-22-at-11.09.53-AM-1024x682.png',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "How to Knee Glide (Hip Hop Dance Moves Tutorial)",
        level:'PRO',
        content: "https://www.youtube.com/embed/-hRb_blG9FQ?si=lYh85LUU6iJMrS1A",
        img: 'https://www.wikihow.com/images/3/3d/Do-the-Baby-Freeze-Step-23-Version-3.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        img: '123',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        img: '123',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "HIP-HOP",
        level:'BEGINNER',
        content: "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-03/e23f197d1fc1118afa9ddfcd21c3d85a.jpeg?itok=DVYIhCJ6",
        img: '123',
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

