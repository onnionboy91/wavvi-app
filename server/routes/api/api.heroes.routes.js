const router = require('express').Router();
const { Hero, Like } = require('../../db/models');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/img');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', async (req, res) => {
  try {
    const heroes = await Hero.findAll();
    res.json({ heroes });
  } catch ({ message }) {
    res.json({ type: 'heroes router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description, film, img } = req.body;
    // const newFileUrl = `/img/${req.file.originalname}`;
    const hero = await Hero.create({
      name,
      description,
      film,
      img,
      user_id: 1,
    });
    // const currentHero = await Hero.findOne({ where: { id: hero.id }, include: Like });
    res.json({
      hero,
    });
  } catch ({ message }) {
    res.json({ type: 'heroes router', message });
  }
});

router.delete('/:heroId', async (req, res) => {
  try {
    const { heroId } = req.params;
    const result = await Hero.destroy({ where: { id: heroId } });
    if (result > 0) {
      res.json({ message: 'success', heroId });
      return;
    }
    res.json({ message: 'Не твоя, вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/:heroId', async (req, res) => {
  try {
    const { heroId } = req.params;
    const { name, description, film, img } = req.body;
    const [result] = await Hero.update(
      { name, description, film, img },
      { where: { id: heroId, user_id: res.locals.user.id } }
    );
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'Не твоя, вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
