const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiCategoriesRouter = require('./api/api.categories.routes');
const apiInstructorsRouter = require('./api/api.instructors.routes');
const apiLikesRouter = require('./api/api.favourites.routes');

router.use('/api/auth', apiAuthRouter);
router.use('/api/instructors', apiInstructorsRouter);
router.use('/api/categories', apiCategoriesRouter);
router.use('/api/likes', apiLikesRouter);

module.exports = router;
