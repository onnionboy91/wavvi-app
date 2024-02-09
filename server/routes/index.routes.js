const express = require('express');
const router = express.Router();

const apiAuthRouter = require('./api/api.auth.routes');
const apiCategoriesRouter = require('./api/api.categories.routes');
const apiInstructorsRouter = require('./api/api.instructors.routes');

router.use('/api/auth', apiAuthRouter);
router.use('/api/instructors', apiInstructorsRouter);
router.use('/api/categories', apiCategoriesRouter);

module.exports = router;
