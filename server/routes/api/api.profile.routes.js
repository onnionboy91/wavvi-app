const router = require("express").Router();
const { User } = require("../../db/models");

router.put("/", async (req, res) => {
  try {
    const { id, name, email, description, styleDance, img } = req.body;

    const [result] = await User.update(
      { name, email, img, description, styleDance },
      { where: { id } }
    );
    const user = await User.findOne({ where: { id } });
    if (result > 0) {
      res.json({ message: "success", user });
      return;
    }
  } catch ({ message }) {
    res.json({ message });
  }
});

module.exports = router;
