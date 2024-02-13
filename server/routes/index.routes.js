const express = require("express");
const router = express.Router();

const apiAuthRouter = require("./api/api.auth.routes");
const apiCategoriesRouter = require("./api/api.categories.routes");
const apiInstructorsRouter = require("./api/api.instructors.routes");
const apiCommentsRouter = require("./api/api.comments.routes");
const apiLikesRouter = require("./api/api.favourites.routes");
const apiProfileRouter = require("./api/api.profile.routes");

router.use("/api/auth", apiAuthRouter);
router.use("/api/instructors", apiInstructorsRouter);
router.use("/api/categories", apiCategoriesRouter);
router.use("/api/comments", apiCommentsRouter);
router.use("/api/likes", apiLikesRouter);
router.use("/api/profile", apiProfileRouter);

module.exports = router;
