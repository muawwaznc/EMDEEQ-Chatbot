const express = require('express');
const router = express.Router();
const emdeeqController = require('../controllers/emdeeqController');


router.post('/Signup', emdeeqController.Signup);
router.post('/Login', emdeeqController.Login);


module.exports = router;