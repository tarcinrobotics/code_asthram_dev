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