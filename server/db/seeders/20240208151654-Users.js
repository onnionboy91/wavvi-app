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
        password: await bcrypt.hash("11111111", 10),
        img: "https://elbrus-api-uploads.storage.yandexcloud.net/image_160_1_99e61bd837.png",
        styleDance: "JUZZ-FUNK",
        level: "INTERMEDIATE",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        role: "Dancer",
        name: "Julia",
        email: "julia@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://www.film.ru/sites/default/files/people/1455652-2184617.jpg",
        styleDance: "SALSA",
        level: "BEGINNER",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. K-pop dance – современная южнокорейская альтернатива хип-хопу. Такой танец сочетает движения различных стилей, мощные хореографические связки и зрелищность каждого элемента. K-pop, то есть корейский поп, это не только музыкальный жанр, но и целая культура, в том числе танцевальное направление, которое становится все более популярным за пределами Южной Кореи. Рассказываем, как танцевать k-pop, что такое k-pop cover dance и где ему учиться (спойлер: у нас!). Танцы — важнейшая составляющая k-pop. Выход сингла k-pop исполнителя подразумевает под собой и выход клипа, в котором очень много танцев. Для создания образа айдола, то есть южнокорейской поп-звезды, наряду с вокальными данными необходимо учитывать его внешность, стиль и танцевальные навыки. Ведь каждое выступление айдолов — это шоу, которое строится не только за счет декораций, костюмов, исполнения песен, но и танцев. Поэтому будущие айдолы проводят в танцевальных классах столько же времени, сколько и на уроках по пению, если не больше. Танцевальное направление k-pop основано именно на сценической хореографии айдолов. В первое время развития k-pop танцы не играли столь большую роль. Они выполняли декоративную функцию, движения были простыми и запоминающимися, а иногда и «вирусными», чтобы фанаты легко могли их повторить. К началу третьего поколения хореография сильно выросла, стала довольно сложной, фанатам теперь трудно повторять ее без танцевальной подготовки. Именно поэтому появились занятия по k-pop cover dance.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Victor",
        email: "victor@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://image.spletnik.ru/resize/fit=contain,gravity=0.5x0.5,format=auto,width=1011,height=700/https://image.spletnik.ru/image/2023/08/16/oR7g/original.webp",
        styleDance: "BREAK-DANCE",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. K-pop dance – современная южнокорейская альтернатива хип-хопу. Такой танец сочетает движения различных стилей, мощные хореографические связки и зрелищность каждого элемента. K-pop, то есть корейский поп, это не только музыкальный жанр, но и целая культура, в том числе танцевальное направление, которое становится все более популярным за пределами Южной Кореи. Рассказываем, как танцевать k-pop, что такое k-pop cover dance и где ему учиться (спойлер: у нас!). Танцы — важнейшая составляющая k-pop. Выход сингла k-pop исполнителя подразумевает под собой и выход клипа, в котором очень много танцев. Для создания образа айдола, то есть южнокорейской поп-звезды, наряду с вокальными данными необходимо учитывать его внешность, стиль и танцевальные навыки. Ведь каждое выступление айдолов — это шоу, которое строится не только за счет декораций, костюмов, исполнения песен, но и танцев. Поэтому будущие айдолы проводят в танцевальных классах столько же времени, сколько и на уроках по пению, если не больше. Танцевальное направление k-pop основано именно на сценической хореографии айдолов. В первое время развития k-pop танцы не играли столь большую роль. Они выполняли декоративную функцию, движения были простыми и запоминающимися, а иногда и «вирусными», чтобы фанаты легко могли их повторить. К началу третьего поколения хореография сильно выросла, стала довольно сложной, фанатам теперь трудно повторять ее без танцевальной подготовки. Именно поэтому появились занятия по k-pop cover dance.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        role: "Instructor",
        name: "Migel",
        email: "migel@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://uznayvse.ru/images/catalog/2023/8/29/migel_94.jpg",
        styleDance: "HIP-HOP",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //

      {
        role: "Instructor",
        name: "Michael",
        email: "michael@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://weproject.media/upload/medialibrary/285/28528a188f9e9eef95cc7aecfbac570a.jpg",
        styleDance: "HIP-HOP",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        role: "Instructor",
        name: "Nika",
        email: "nika@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://www.mentoday.ru/upload/img_cache/cf7/cf777b6483b96e06a8fcb67d19e12138_fitted_1332x0.jpg",
        styleDance: "VOGUE",
        level: "INTERMEDIATE",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. K-pop dance – современная южнокорейская альтернатива хип-хопу. Такой танец сочетает движения различных стилей, мощные хореографические связки и зрелищность каждого элемента. K-pop, то есть корейский поп, это не только музыкальный жанр, но и целая культура, в том числе танцевальное направление, которое становится все более популярным за пределами Южной Кореи. Рассказываем, как танцевать k-pop, что такое k-pop cover dance и где ему учиться (спойлер: у нас!). Танцы — важнейшая составляющая k-pop. Выход сингла k-pop исполнителя подразумевает под собой и выход клипа, в котором очень много танцев. Для создания образа айдола, то есть южнокорейской поп-звезды, наряду с вокальными данными необходимо учитывать его внешность, стиль и танцевальные навыки. Ведь каждое выступление айдолов — это шоу, которое строится не только за счет декораций, костюмов, исполнения песен, но и танцев. Поэтому будущие айдолы проводят в танцевальных классах столько же времени, сколько и на уроках по пению, если не больше. Танцевальное направление k-pop основано именно на сценической хореографии айдолов. В первое время развития k-pop танцы не играли столь большую роль. Они выполняли декоративную функцию, движения были простыми и запоминающимися, а иногда и «вирусными», чтобы фанаты легко могли их повторить. К началу третьего поколения хореография сильно выросла, стала довольно сложной, фанатам теперь трудно повторять ее без танцевальной подготовки. Именно поэтому появились занятия по k-pop cover dance.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Gabriel",
        email: "gabriel@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://assets.vogue.ru/photos/604b8deed979e319891ac2f1/2:3/w_2560%2Cc_limit/!vg_01_.jpg",
        styleDance: "BREAK-DANCE",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Ayana",
        email: "ayana@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://s0.smartresize.com/wallpaper/885/954/HD-wallpaper-lalisa-blackpink-lisa.jpg",
        styleDance: "K-POP",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

        createdAt: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Kira",
        email: "kira@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://s16.stc.yc.kpcdn.net/share/i/12/12971108/wr-960.webp",
        styleDance: "JUZZ FUNK",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Natali",
        email: "natali@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://s1.1zoom.ru/big0/150/Fitness_Pose_Smile_Hands_Glance_Pink_background_602988_1280x853.jpg",
        styleDance: "VOGUE",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        role: "Instructor",
        name: "Amelia",
        email: "amelia@mail.ru",
        password: await bcrypt.hash("11111111", 10),
        img: "https://media.krasota.ru/filer_public/0c/1b/0c1bba7c-8043-40d7-b0a1-c8a238ac6b1b/kendall_dzhenner_3.jpg",
        styleDance: "SALSA",
        level: "ADVANCED",
        description:
          "Всегда стараюсь вдохновлять своих учеников на развитие своих танцевальных навыков в атмосфере поддержки, творчества и энергии. Я забочусь о каждом ученике и помогаю им раскрыть свой танцевальный потенциал в увлекательном и дружелюбном окружении хип-хопа. Hip-hop – это смесь энергии, задора, позитива. Это не просто танец, а целая культура со своей одеждой, привычками, движениями. Поэтому невозможно просто научиться танцевать хип-хоп, нужно жить этой культурой, носить эту одежду, любить эту музыку. Хип-хоп культура была международно признана с 70-х гг. Главными ее составляющими являются рэп (МС'ing - эмсиинг), брэйк-дэнс, граффити, уличные виды спортивных игр. А начиналось все так. Несмотря на то, что хип-хоп как образ жизни зародился давно в самых разных уголках Северной Америки, истинной родиной считается Южный Бронкс - черное гетто Нью-Йорка, один из беднейших кварталов. Но слова хип-хоп тогда еще не было, его придумал несколько лет спустя легендарный DJ Африка Бамбаатаа, когда повзрослевшая культура уже нуждалась в общем названии. Отцы-основатели - Budda Stretch и Henry Link. C того времени люди без профессиональной подготовки, но с искренним желанием танцевать, вывели танцы на улицы. Несмотря на то, что в хип-хопе можно увидеть отголоски современных степов, кача и африканских танцев - этот стиль танца больше об импровизации (фристайле) и эмоциях. Здесь нет строгой школы, поэтому каждый свободен танцевать, как чувствует и развивать свой собственный стиль на основе базовых мувов.",

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
