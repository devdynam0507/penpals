const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    identifier: String,
    password: String,
    published_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', UserSchema);