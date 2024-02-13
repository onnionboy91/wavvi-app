const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const instructors = await User.findAll({ where: { role: 'Instructor' } });
    res.json(instructors);
  } catch ({ message }) {
    res.json({ type: 'instructors router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password, styleDance, level, img, description } =
      req.body;
    const instructor = await User.create({
      role: 'Instructor',
      name,
      email,
      password,
      styleDance,
      level,
      img,
      description,
    });
    res.json({
      instructor,
    });
  } catch ({ message }) {
    res.json({ type: 'instructors router', message });
  }
});

router.delete('/:instructorId', async (req, res) => {
  try {
    const { instructorId } = req.params;
    const result = await User.destroy({ where: { id: instructorId } });
    if (result > 0) {
      res.json({ message: 'success', instructorId });
      return;
    }
    res.json({ message: 'Нет прав для удаления' });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.put('/', async (req, res) => {
  try {
    const { id, name, email, password, styleDance, level, img, description } =
      req.body;
    const instructorUpdate = await User.update(
      {
        id,
        role: 'Instructor',
        name,
        email,
        password,
        styleDance,
        level,
        img,
        description,
      },
      { where: { id: +id } }
    );
    if (instructorUpdate[0] > 0) {
      const instructor = await User.findOne({ where: { id: +id } });
      console.log(instructor, 33333);
      res.json({
        instructor,
      });
    }
  } catch ({ message }) {
    res.json({ type: 'instructors router', message });
  }
});

module.exports = router;
