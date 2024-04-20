const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const session = require('express-session'); // Import express-session
const collection = require('./config');

const app = express();

// Convert data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Static file
app.use(express.static('public'));

// Configure session middleware
app.use(session({
    secret: 'secret', // Add a secret key for session encryption
    resave: false,
    saveUninitialized: false
}));

// Middleware to check if user is authenticated
const authenticateUser = (req, res, next) => {
    if (req.session.userId) {
        // User is authenticated
        next();
    } else {
        // User is not authenticated, redirect to login page
        res.redirect('/');
    }
};

// For login
app.get('/', (req, res) => {
    res.render('login');
});

// Signup
app.get('/signup', (req, res) => {
    res.render('signup');
});

// Register User
app.post('/signup', async (req, res) => {
    try {
        const data = {
            name: req.body.username,
            password: req.body.password
        };

        // Check if the user already exists in the database
        const existingUser = await collection.findOne({ name: data.name });
        if (existingUser) {
            return res.send('User already exists. Please choose a different username.');
        } else {
            // Hash the password using bcrypt
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword;

            // Insert user data into the database
            await collection.insertOne(data);
            res.send('User registered successfully.');
        }
    } catch (error) {
        res.send('Error registering user.');
    }
});

// Login user
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await collection.findOne({ name: username });

        if (!user) {
            return res.send('User not found.');
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            // Store user ID in session after successful login
            req.session.userId = user._id;
            res.render('home');
        } else {
            res.send('Wrong password.');
        }
    } catch (error) {
        res.send('Error logging in.');
    }
});

// Home route (requires authentication)
app.get('/home', authenticateUser, async (req, res) => {
    try {
        const userId = req.session.userId;
        // Fetch user-specific data based on userId
        const userData = await collection.findOne({ _id: userId });
        if (!userData) {
            return res.send('User data not found.');
        }
        res.render('home', { userData });
    } catch (error) {
        res.send('Error fetching user data.');
    }
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send('Error logging out.');
        }
        // Redirect to login page after logout
        res.redirect('/');
    });
});


// PORT selection
const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
