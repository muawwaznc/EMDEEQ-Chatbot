const { EmdeeqUser } = require('../models'); 

exports.Login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email and password
        const user = await EmdeeqUser.findOne({ email, password });
        if (user) 
        {
            // Return success response with user ID
            res.status(200).json({ 
                message: 'Login successful', 
                userId: user._id 
            });
        } 
        else 
        {
            // If no user found, return unauthorized error
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } 
    catch (err) {
        // Handle any server errors
        console.error('Error while checking user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.Signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if a user with the given email already exists
        const existingUser = await EmdeeqUser.findOne({ email });
        if (existingUser) 
        {
            return res.status(409).json({ message: 'Email already in use' }); 
        }

        // Create a new user
        const newUser = new EmdeeqUser({ email, password });
        await newUser.save();

        // Return success response with user ID
        res.status(201).json({
            message: 'Signup successful',
            userId: newUser._id,
        });
    } 
    catch (err) {
        // Handle any server errors
        console.error('Error while signing up user:', err);
        res.status(500).json({ message: 'Internal server error' });
    }
};