const { Chat } = require('../models'); 

exports.AddChat = async (req, res) => {
    try 
    {
        const chat = new Chat(req.body);
        await chat.save();
        res.status(201).json({ message: 'Chat Created', chatId: chat._id });
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something Went Wrong... Please Try Again' });
    }
};

exports.GetAllChats = async (req, res) => {
    try 
    {
        const chats = await Chat.find().sort({ _id: -1 });
        res.status(200).json(chats);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something Went Wrong... Please Try Again' });
    }
};

exports.GetAllChatsOfUser = async (req, res) => {
    try 
    {
        const { userId } = req.params;
        console.log(userId);
        const chats = await Chat.find({ chatCreatedBy: userId }).sort({ _id: -1 });
        res.status(200).json(chats);
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something Went Wrong... Please Try Again' });
    }
};