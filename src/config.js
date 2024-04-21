const mongoose = require("mongoose");

// MongoDB Atlas connection string
const mongoURI = "mongodb+srv://tarcinrobotics301:tarcinrobotics301@cluster0.kpaipm9.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Database connected successfully");
})
.catch((err) => {
  console.error("Connection error:", err);
});

// Create a schema
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

// Define the collection
const collection = mongoose.model("User", LoginSchema);

module.exports = collection;
