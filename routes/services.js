const express = require('express');
const router = express.Router();
const servicesController = require('../controllers/servicesController');

// POST /api/services - Handle service booking form submissions
router.post('/', servicesController.createServiceBooking);

module.exports = router;
