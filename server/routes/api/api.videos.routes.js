const router = require('express').Router();
const { Video, Like } = require('../../db/models');

router.get('/', async (req, res) => {
  console.log(3454645);
  try {
    const videos = await Video.findAll();
    // {
    //   include: {
    //     model: Like,
    //     where: { user_id: res.locals.user.id },
    //   },
    // }
    console.log(videos);
    res.json(videos);
  } catch ({ message }) {
    res.json({ type: 'videos router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, content, img, level, category_id } = req.body;
    const video = await Video.create({
      name,
      content,
      img,
      level,
      category_id,
    });
    res.json({
      video,
    });
  } catch ({ message }) {
    res.json({ type: 'video post router', message });
  }
});

router.delete('/:videoId', async (req, res) => {
  try {
    const { videoId } = req.params;
    const result = await Video.destroy({ where: { id: videoId } });
    if (result > 0) {
      res.json({ message: 'success', videoId });
      return;
    }
    res.json({ message: 'Нет прав для удаления' });
  } catch ({ message }) {
    res.json({ message });
  }
});
module.exports = router;
