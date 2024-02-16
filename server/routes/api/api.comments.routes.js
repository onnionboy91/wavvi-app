const router = require('express').Router();
const { Comment, User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const comments = await Comment.findAll({include: User});
    res.json({ comments });
  } catch ({ message }) {
    res.json({ type: 'comments router', message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, user_id, video_id } = req.body;
    console.log( title, user_id, video_id );
    const comment = await Comment.create({ title, user_id, video_id });
    const currentcomment = await Comment.findOne({where: {id: comment.id}, include: User});
    res.json({ currentcomment });  
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
