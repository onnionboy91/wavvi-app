const router = require('express').Router();
const { Video, Category } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    console.log(categories);
    res.json({ categories });
  } catch ({ message }) {
    res.json({ type: 'categories router', message });
  }
});

router.get('/:categoryId', async (req, res) => {
  try {
    
    const videos = await Video.findAll({where: {category_id: categoryId} });
    res.json({ videos });
  } catch ({ message }) {
    res.json({ type: 'videos router', message });
  }
});

module.exports = router;
