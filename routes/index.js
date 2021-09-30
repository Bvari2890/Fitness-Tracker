const express = require('express');
const router = express.Router();
const htmlRoutes = require('./front');
const apiRoutes = require('./api');

router.use('/',htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;