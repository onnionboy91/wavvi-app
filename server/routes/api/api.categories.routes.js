const router = require('express').Router();
const { Video, Category, Like, Comment } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll(
    {include: {model:Video}}
    );
    res.json({ categories });
  } catch ({ message }) {
    res.json({ type: 'categories router', message });
  }
});

router.get('/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log(res.locals.user.id);
    const videos = await Video.findAll({
      where: { category_id: categoryId },
      // include: { model: Like, where: { user_id: res.locals.user.id } },
    });
    res.json({ videos });
  } catch ({ message }) {
    res.json({ type: 'videos router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, img } = req.body;
    const category = await Category.create({
      name,
      img,
    });
    res.json({
      category,
    });
  } catch ({ message }) {
    res.json({ type: 'categories router', message });
  }
});

router.delete('/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;
    const result = await Category.destroy({ where: { id: categoryId } });
    if (result > 0) {
      res.json({ message: 'success', categoryId });
      return;
    }
    res.json({ message: 'Нет прав для удаления' });
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
