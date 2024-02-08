const router = require('express').Router();
const { Like } = require('../../db/models');

router.post('/', async (req, res) => {
  try {
    const { id } = req.body;
    await Like.create({ user_id: res.locals.user.id, hero_id: id });
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.delete('/:heroId', async (req, res) => {
  try {
    const { heroId } = req.params;
    const result = await Like.destroy({ where: { user_id: res.locals.user.id, hero_id: heroId } });
    if (result > 0) {
      res.json({ message: 'success' });
      return;
    }
    res.json({ message: 'Не твоя вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
