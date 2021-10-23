
const { truncate } = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: ''
    },

    email_id: {
        type: String,
        unique: true
    },
    mobile_number: {
        type: String,
        unique: true
    },
    role: {
        type: String,
        default: 'OPERATOR'
    }
});

module.exports = mongoose.model('User', User);