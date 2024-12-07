const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (for client-side code)

// Mock database
const mockDatabase = {
  "fever": "You might have a fever. Please stay hydrated and rest.",
  "cough": "You might have a cold. Try to drink warm fluids."
};

// Route to handle user input
app.post('/process-input', async (req, res) => {
  const userInput = req.body.input;

  try {
    // Step 1: Check in the database
    if (mockDatabase[userInput.toLowerCase()]) {
      return res.json({
        source: "database",
        response: mockDatabase[userInput.toLowerCase()]
      });
    }

    // Step 2: Query Symptoms Checker API
    const symptomsCheckerAPIUrl = "https://example-symptoms-checker-api.com/check";
    let apiResponse = await axios.post(symptomsCheckerAPIUrl, { symptoms: userInput });

    if (apiResponse.data && apiResponse.data.response) {
      return res.json({
        source: "symptoms-checker",
        response: apiResponse.data.response
      });
    }

    // Step 3: Use OpenAI to clean user input and re-query Symptoms Checker API
    const openAIUrl = "https://api.openai.com/v1/completions";
    const cleanedInputResponse = await axios.post(
      openAIUrl,
      {
        model: "text-davinci-003",
        prompt: `Clean the following user input: "${userInput}"`,
        max_tokens: 50
      },
      {
        headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` }
      }
    );

    if (cleanedInputResponse.data && cleanedInputResponse.data.choices) {
      const cleanedInput = cleanedInputResponse.data.choices[0].text.trim();

      apiResponse = await axios.post(symptomsCheckerAPIUrl, { symptoms: cleanedInput });

      if (apiResponse.data && apiResponse.data.response) {
        return res.json({
          source: "symptoms-checker-cleaned",
          response: apiResponse.data.response
        });
      }
    }

    // Fallback response
    res.json({ source: "fallback", response: "Sorry, we couldn't process your input." });
  } catch (error) {
    console.error("Error processing input:", error.message);
    res.status(500).json({ error: "Internal server error." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
