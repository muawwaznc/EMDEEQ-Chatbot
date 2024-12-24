const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');


router.get('/get-messages/:chatId', messageController.GetAllMessagesByChatId);
router.post('/add-message', messageController.AddMessage);
router.post('/get-response', messageController.GetGPTResponse);
router.get('/get-location-from-postal-code/:postalCode', messageController.GetLocationFromPostalCode);
router.get('/get-nearby-places', messageController.GetNearbyPlaces);
router.get('/get-response-by-second-api', messageController.GetResponseFromSecondAPI);


module.exports = router;