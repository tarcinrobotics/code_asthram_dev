const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/code_asthram");

//To check database connected or not
connect.then(() =>{
    console.log("Database connected Successfully");
})
.catch(() =>{
    console.log("Database cannot be connected");
});

//create a schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//collection part
const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
/*
const mongoose = require("mongoose");

// MongoDB Atlas connection string
const mongoURI = "mongodb+srv://tarcinrobotics301:tarcinrobotics301@cluster0.kpaipm9.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for database connection
db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Database connected successfully");
});

// Export the connection
module.exports = db;*/
