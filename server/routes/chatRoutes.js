const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');


router.get('/', chatController.GetAllChats);
router.get('/get-chats-of-user/:userId', chatController.GetAllChatsOfUser);
router.post('/add-chat', chatController.AddChat);

module.exports = router;