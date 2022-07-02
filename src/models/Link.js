const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
    shortUrl: String,
    originalUrl: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Link", LinkSchema);