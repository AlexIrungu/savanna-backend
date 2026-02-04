const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST /api/booking - Handle all package bookings
router.post('/', bookingController.createBooking);

module.exports = router;
