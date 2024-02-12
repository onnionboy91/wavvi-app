const router = require('express').Router();
const { Comment } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.json({ comments });
  } catch ({ message }) {
    res.json({ type: 'comments router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const comment = await Comment.create({ title, user_id: 1, video_id: 1 });
    // const currentcomment = await Comment.findOne({where: {id: comment.id}, include: User})
    res.json({ comment });
  } catch ({ message }) {
    res.json({ type: 'comments post', message });
  }
});

router.delete('/:commentId', async (req, res) => {
  try {
    const { commentId } = req.params;
    const result = await Comment.destroy({ where: { id: commentId } });
    if (result > 0) {
      res.json({ message: 'success', commentId });
      return;
    }
  } catch ({ message }) {
    res.json({ type: 'comment delete', message });
  }
});

module.exports = router;