const router = require('express').Router();
const { Video } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch ({ message }) {
    res.json({ type: 'videos router', message });
  }
});

module.exports = router;
