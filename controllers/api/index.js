const router = require('express').Router();

// assign the userRoutes to the Express.js router
const userRoutes = require('./user-routes');
router.use('/users', userRoutes);

// assign the postRoutes to the Express.js router
const postRoutes = require('./post-routes');
router.use('/posts', postRoutes);

// assign the commentRoutes to the Express.js router

const commentRoutes = require('./comment-routes');
router.use('/comments', commentRoutes);


module.exports = router;