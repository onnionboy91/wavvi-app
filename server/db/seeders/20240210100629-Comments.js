"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const comments = [
      {
        title: "Ого, эти танцоры просто взорвали экран! Невероятные движения и энергия!",
        user_id: 1,
        video_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Музыка, костюмы и хореография - все идеально сочетается в этом выступлении. Безупречное исполнение!",
        user_id: 1,
        video_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Эти танцоры точно знают, как поднять настроение и вызвать улыбку у зрителей. Это настоящее мастерство!",
        user_id: 1,
        video_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ];

    await queryInterface.bulkInsert("Comments", comments);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Comments");
  },
};

