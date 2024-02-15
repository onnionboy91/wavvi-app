"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const videos = [
      {
        name: "How I practice hip hop dance with four foundations",
        level:'BEGINNER',
        content: "https://www.youtube.com/embed/GcZJMiHds3U?si=CrsQClE1GGU1Dk12&amp;start=30",
        img: 'https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/ad529cd8434/82911a81e4b77ff84f257/1532615051_image.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "How I practice hip hop dance with Isolations from head to bottom",
        level:'MEDIUM',
        content: "https://www.youtube.com/embed/6n3THHn_gVs?si=qn5cqiQmnhRHOH0K&amp;start=30",
        img: 'https://www.danceresourcecenter.org/wp-content/uploads/2023/09/Screen-Shot-2023-09-22-at-11.09.53-AM-1024x682.png',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "One simple concept to help you freestyle in dance",
        level:'PRO',
        content: "https://www.youtube.com/embed/-hRb_blG9FQ?si=lYh85LUU6iJMrS1A",
        img: 'https://www.wikihow.com/images/3/3d/Do-the-Baby-Freeze-Step-23-Version-3.jpg',
        category_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Freeze Transitions Shane (Hustle Kidz)",
        level:'BEGINNER',
        content: "https://www.youtube.com/embed/Xk8Ntbn8ygY?si=FmQkxD6vd46tRKb8&amp;start=27",
        img: 'https://i.ytimg.com/vi/Xk8Ntbn8ygY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAdkzvdZ9RBq0if6rVLi7louiQFiw',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Original Go Downs Yan (AllTheMost/Russia)",
        level:'MEDIUM',
        content: "https://www.youtube.com/embed/YFkhbLLV1Mg?si=evdJtZ0munTBn7Fe&amp;start=11",
        img: 'https://i.ytimg.com/vi/YFkhbLLV1Mg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD86zJ7lpwTDLGuWcUPcBIaZTI2jw',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Transitions to Powermove Noe (Vagabonds)",
        level:'PRO',
        content: "https://www.youtube.com/embed/nITq64wqUYI?si=mOTDP1dZsp40PRRG&amp;start=33",
        img: '123',
        category_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Хореография по JAZZ-FUNK для начинающих | ЭЛИНА ГАЛИХАНОВА",
        level:'BEGINNER',
        content: "https://www.youtube.com/embed/TpPpnNW5g7k?si=HsJ72lyRInhoUujP&amp;start=176",
        img: 'https://i.ytimg.com/vi/TpPpnNW5g7k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK_wCGlPorF10GuvlCh86xI8R2Lw',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "JAZZ-FUNK для начинающих с РУСЛАНОМ РАКИПОВЫМ",
        level:'MEDIUM',
        content: "https://www.youtube.com/embed/NWLUQ0EayAA?si=PbHeBCehlo1DuTzW&amp;start=302",
        img: 'https://i.ytimg.com/vi/NWLUQ0EayAA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_PL8OvLAVs-UKnpJlpldA8BsqlA',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "MEI - JAZZ FUNK Dance class/ NOA DANCE ACADEMY",
        level:'PRO',
        content: "https://www.youtube.com/embed/_AJzYKiQxPY?si=76BP2BVPvdVubVVw&amp;start=23",
        img: 'https://i.ytimg.com/vi/_AJzYKiQxPY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBaCR3nnYgipRFkm98qLp58h-DaJg',
        category_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "15 Salsa Moves for Beginners | Salsa Dance Tutorial for absolute Beginners",
        level:'BEGINNER',
        content: "https://www.youtube.com/embed/E95iuYI068A?si=pQHTxz--L24SKIdm&amp;start=9",
        img: 'https://i.ytimg.com/vi/E95iuYI068A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEtnyZ7IqqstJeuhhWuyL6C_f8Dg',
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Как исполнять сальсу: быстрая комбинация сальсы",
        level:'MEDIUM',
        content: "https://www.youtube.com/embed/cEit8ItINl8?si=qSkfyws_9deLB9OM&amp;start=9",
        img: 'https://i.ytimg.com/vi/cEit8ItINl8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCbZ1SVOZgFu3SJun8iDkzEp9tJzQ',
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Salsa Dance Tutorial: YOYO Combo for Intermediate",
        level:'PRO',
        content: "https://www.youtube.com/embed/gKqdOFQm7LI?si=tHLvL73873DG-f6d&amp;start=9",
        img: 'https://i.ytimg.com/vi/gKqdOFQm7LI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEvWaiEkRCtauYsK7TnOu_8hVIyw',
        category_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "VOGUE - База + Разминка",
        level:'BEGINNER',
        content: "https://www.youtube.com/embed/JB-f1IIxvcc?si=Bo8LDGPn4iJy_B9q&amp;start=9",
        img: 'https://i.ytimg.com/vi/JB-f1IIxvcc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmJo2lxskyjuMP3_9a9sRhjduyLA',
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "УЧИМСЯ ТАНЦЕВАТЬ РУКАМИ - VOGUE DANCE TUTORIAL",
        level:'MEDIUM',
        content: "https://www.youtube.com/embed/9mJu5BaG8hs?si=ZZaNUXqf-GVzIe6o&amp;start=9",
        img: 'https://i.ytimg.com/vi/9mJu5BaG8hs/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDk3YWE-QEC9HJXw2dK_J-l__MqLg',
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "How to Vogue with Jocquese Whitfield",
        level:'PRO',
        content: "https://www.youtube.com/embed/gKqdOFQm7LI?si=tHLvL73873DG-f6d&amp;start=9",
        img: 'https://i.ytimg.com/vi/6lyUvaaxWRY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHNSKUjxw1BAFJ0z5Ip6wtkrlXeQ',
        category_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "K-POP DANCE TUTORIAL TWICE - The Feels | MIRRORED",
        level:'BEGINNER',
        content: "https://www.youtube.com/embed/OMwfUqypF_Y?si=gZl8fCOZHm4kBktg&amp;start=10",
        img: 'https://i.ytimg.com/vi/OMwfUqypF_Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC85gxACT-j196nxkUz4JQenmIfaA',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "K-POP DANCE TUTORIAL LISA - LALISA | MIRRORED",
        level:'MEDIUM',
        content: "https://www.youtube.com/embed/bj4wC4t94ak?si=PjPnCkqQBKDZKgIw&amp;start=10",
        img: 'https://i.ytimg.com/vi/bj4wC4t94ak/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBV4WR4OHwdUOHlGJb1Tam3lsqRGA',
        category_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jung Kook Dance Tutorial - SLOW MUSIC + MIRROR (Chorus)",
        level:'PRO',
        content: "https://www.youtube.com/embed/6FWeUDtePtE?si=fG-rxo4pv1_O4wxy&amp;start=9",
        img: 'https://i.ytimg.com/vi/6FWeUDtePtE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUar65hcaCBM_npCcr9mtzVQWWYg',
        category_id: 3,
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

