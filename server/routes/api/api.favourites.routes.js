const router = require('express').Router();
const { Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const result = await Like.findAll();
    res.json({ result });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { user_id, video_id } = req.body;
    await Like.create({ user_id: user_id, video_id: video_id });
    res.json({ message: 'success' });
  } catch ({ message }) {
    res.json({ message });
  }
});

// router.delete('/:heroId', async (req, res) => {
//   try {
//     const { heroId } = req.params;
//     const result = await Like.destroy({
//       where: { user_id: res.locals.user.id, hero_id: heroId },
//     });
//     if (result > 0) {
//       res.json({ message: 'success' });
//       return;
//     }
//     res.json({ message: 'Не твоя вот ты и бесишься' });
//   } catch ({ message }) {
//     res.json({ message });
//   }
// });

module.exports = router;
