const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    isSuperuser: {
        type: Boolean,
        default: false,
      },
});

module.exports = mongoose.model('User',userSchema);