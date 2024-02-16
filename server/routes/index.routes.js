const express = require("express");
const router = express.Router();
const apiAuthRouter = require("./api/api.auth.routes");
const apiCategoriesRouter = require("./api/api.categories.routes");
const apiInstructorsRouter = require("./api/api.instructors.routes");
const apiCommentsRouter = require("./api/api.comments.routes");
const apiLikesRouter = require("./api/api.favourites.routes");
const apiVideosRouter = require("./api/api.videos.routes");
const apiProfileRouter = require("./api/api.profile.routes");
// const apiPersonalRouter = require("./api/api.personal.routes");

router.use("/api/auth", apiAuthRouter);
router.use("/api/instructors", apiInstructorsRouter);
router.use("/api/categories", apiCategoriesRouter);
router.use("/api/comments", apiCommentsRouter);
router.use("/api/likes", apiLikesRouter);
router.use("/api/videos", apiVideosRouter);
router.use("/api/profile", apiProfileRouter);
// router.use("/api/personal", apiPersonalRouter);

module.exports = router;
