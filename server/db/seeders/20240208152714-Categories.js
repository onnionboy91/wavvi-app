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
        name: "JAZZ FUNK",
        img: "https://sport.insure/upload/iblock/362/362e50449a79c0fdc76dc48918c2eb6c.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "K-POP",
        img: "https://plus.unsplash.com/premium_photo-1664474889359-7b2a6d500d4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29yZWFuJTIwZGFuY2V8ZW58MHwwfDB8fHww",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "BREAK-DANCE",
        img: "https://images.unsplash.com/photo-1609602726003-77a7bf096919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "VOGUE",
        img: "https://lh5.googleusercontent.com/proxy/wD0_c_sW5XcyZoHcHUxWomTuOTaTmKAr-6OHNuMIK1aMyJJWBLfLuc9ILnVnzunUq0IdbrtP4An57qzbIouzCeAm_aIRtqV3J4SeFihuE5S3SnI9lD4fTyGOplHG6jiia4Kz_dz-1D46K8Sz4e8qQr4RBOL5rw",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: "SALSA",
        img: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ayUyMHBvcCUyMGRhbmNlfGVufDB8MHwwfHx8MA%3D%3D",
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
