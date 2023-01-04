const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports.Otp = mongoose.model ('Otp', Schema ({
    number: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {type: Date, default: Date.now, index: {expires: 300} }
    // After 5 mintues it gets deleted automatically from the database
}, { timestamps: true}))