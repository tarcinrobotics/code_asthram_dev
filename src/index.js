const express = require('express')
const pasth = require("path")
const bcrypt = require("bcrypt")
const collection = require("./config");

const app = express();

//convert data into json format
app.use(express.json());

app.use(express.urlencoded({extended: false}));

//use EJS as the view engine
app.set('view engine', 'ejs');

//static file
app.use(express.static("public"));

//For login
app.get("/", (req, res) =>{
    res.render("login");
});

//signup
app.get("/signup", (req, res) =>{
    res.render("signup");
});


// Register User
app.post("/signup", async (req, res) => {
    try {
        const data = {
            name: req.body.username,
            password: req.body.password
        };

        // Check if the user already exists in the database
        const existingUser = await collection.findOne({ name: data.name });
        if (existingUser) {
            return res.send("User already exists. Please choose a different username.");
        } else {
            // Hash the password using bcrypt
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
            data.password = hashedPassword;

            // Insert user data into the database
            await collection.insertOne(data);
            console.log("User registered successfully.");

            // Redirect to login page
            res.redirect("/");
        }
    } catch (error) {
        console.error("Error registering user:", error);
        res.send("Error registering user.");
    }
});


//Login user 
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            // Send an alert message if the username is not found
            return res.send("<script>alert('User not found');</script>");
        }

        // Compare the hashed password from the database with the plain text password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (isPasswordMatch) {
            // Redirect to the home page if the password matches
            return res.render("home");
        } else {
            // Send an alert message if the password is incorrect
            return res.send("<script>alert('Wrong password');</script>");
        }
    } catch {
        // Send an alert message if an error occurs
        return res.send("<script>alert('Wrong details');</script>");
    }
});


// PORT selection
const port  = 5000;
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})