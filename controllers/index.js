const router = require('express').Router();

const apiRoutes = require('./api');

//add home-routes js

const homeRoutes = require('./home-routes');
router.use('/', homeRoutes);

// add dashboard-routes.js

const dashboardRoutes = require('./dashboard-routes');
router.use('/dashboard', dashboardRoutes);


router.use('/api', apiRoutes);

router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;