const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailSentController');

router.post('/SendEmailOfServiceQuestionnaire', emailController.SendEmailOfServiceQuestionnaire);
router.post('/SendEmailOfContactUs', emailController.SendEmailOfContactUs);


module.exports = router;