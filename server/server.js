// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db/db');
require('dotenv').config();

const chatRoutes = require('./routes/chatRoutes');
const messageRoutes = require('./routes/messageRoutes');
const emailSentRoutes = require('./routes/emailSentRoutes')

// Initialize Express app
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/chats', chatRoutes);
app.use('/api/chats', messageRoutes);
app.use('/api/email', emailSentRoutes);

async function checkApiKeyValidity() {
    try 
    {
        const apiKey = process.env.OPENAI_API_KEY;
        const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (response.ok) 
        {
            console.log('API key is valid.');
        } 
        else 
        {
            console.error('Invalid API key.');
            process.exit(1);
        }
    } 
    catch (error) 
    {
        console.error('Error checking API key:', error);
        process.exit(1);
    }
}

app.listen(PORT, () => {
    //checkApiKeyValidity();
    console.log(`Server is running on http://localhost:${PORT}`);
});
