const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const instructors = await User.findAll({ where: { role: 'Instructor' } }); //доделать
    res.json({ instructors });
  } catch ({ message }) {
    res.json({ type: 'instructors router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password, styleDance, level, description } = req.body;
    const instructor = await User.create({
      role: 'Instructor',
      name,
      email,
      password,
      styleDance,
      level,
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

module.exports = router;
