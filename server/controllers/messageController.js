const { Message } = require('../models'); 

exports.AddMessage = async (req, res) => {
    try 
    {
        const message = new Message(req.body);
        await message.save();
        res.status(201).json({ message: 'Message Created' });
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({ error: 'Something Went Wrong... Please Try Again' });
    }
};

exports.GetAllMessagesByChatId = async (req, res) => {
    try 
    {
        const { chatId } = req.params;
        const messages = await Message.find({ chatId });
        res.status(200).json(messages);
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({ error: 'Something Went Wrong... Please Try Again' });
    }
};

exports.GetGPTResponse = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ response: 'Message is required' });
    }

    try 
    {
        const fetch = (await import('node-fetch')).default;
        const apiKey = process.env.OPENAI_API_KEY;
        const apiUrl = 'https://api.openai.com/v1/chat/completions';
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };
        const body = JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
            max_tokens: 150
        });

        const apiResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: body
        });

        const data = await apiResponse.json();
        const chatResponse = data.choices[0].message.content;

        res.json({ response: chatResponse });
    } 
    catch (error) 
    {
        console.error('Error:', error);
        res.status(500).json({ response: 'An error occurred while processing your request.' });
    }
};

exports.GetLocationFromPostalCode = async (req, res) => {
    try {
        const fetch = (await import('node-fetch')).default;
        const { postalCode } = req.params;
        const apiKey = process.env.GOOGLE_MAP_API_KEY;
        const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${postalCode}&key=${apiKey}`;
        
        const response = await fetch(geocodeUrl);
        const data = await response.json();

        if (data.status === 'OK') 
        {
            const location = data.results[0].geometry.location;
            res.status(200).json({
                latitude: location.lat,
                longitude: location.lng
            });
        } 
        else 
        {
            throw new Error("Geocoding API error: " + data.status);
        }
    } 
    catch (error) 
    {
        res.status(500).json({ error: error.message });
    }
};

exports.GetNearbyPlaces = async (req, res) => {
    try 
    {
        const { latitude, longitude, service } = req.query;
        const radius = 90000;
        const googleMapApiKey = process.env.GOOGLE_MAP_API_KEY;
        
        if (!latitude || !longitude || !service) {
            throw new Error('Latitude, longitude, or service parameter is missing.');
        }

        const placesUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${encodeURIComponent(service)}&location=${latitude},${longitude}&radius=${radius}&key=${googleMapApiKey}`;
        console.log(placesUrl);
        const response = await fetch(placesUrl);
        const data = await response.json();

        if (!response.ok) 
        {
            throw new Error(`Places API HTTP error! status: ${response.status}`);
        }

        if (data.status === 'OK') 
        {
            res.status(200).json(data.results);
        } 
        else 
        {
            throw new Error("Places API error: " + data.status);
        }
    } 
    catch (error) 
    {
        res.status(500).json({ error: error.message });
    }
};

exports.GetResponseFromSecondAPI = async (req, res) => {
    try 
    {
        const { message } = req.query;
        const fetch = (await import('node-fetch')).default;
        const response = await fetch('https://b286-64-23-174-216.ngrok-free.app/api/conversation', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message || "hi"
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } 
    catch (error) 
    {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
};