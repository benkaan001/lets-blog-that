const router = require('express').Router();

// assign the userRoutes to the Express.js router
const userRoutes = require('./user-routes');
router.use('/users', userRoutes);

// assign the postRoutes to the Express.js router
const postRoutes = require('./post-routes');
router.use('/posts', postRoutes);


module.exports = router;