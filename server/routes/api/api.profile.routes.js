// const router = require("express").Router();
// const { User } = require("../../db/models");

// router.get("/:profileId", async (req, res) => {
//   try {
//     const { profileId } = req.params;
//     const user = await User.findOne({ where: { profileId: profileId } });
//     res.json({ user });
//   } catch ({ message }) {
//     res.json({ type: "user router", message });
//   }
// });
