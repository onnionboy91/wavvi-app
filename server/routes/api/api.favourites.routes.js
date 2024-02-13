const router = require('express').Router();
const { Like } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const likes = await Like.findAll();
    res.json(likes);
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { user_id, video_id } = req.body;
    const like = await Like.create({ user_id, video_id });
    res.json({ like });
  } catch ({ message }) {
    res.json({ type: 'like router', message });
  }
});

router.delete('/:userId/:videoId', async (req, res) => {
  try {
    const { userId, videoId } = req.params;
    const like = await Like.destroy({
      where: { user_id: userId, video_id: videoId },
    });
    if (result > 0) {
      res.json({ message: 'success', like });
      return;
    }
    res.json({ message: 'Не твоя вот ты и бесишься' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
