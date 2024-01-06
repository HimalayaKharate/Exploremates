
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let EmailRequestSchema = new Schema({
    id: String,
    email: String,
    date: Date
})

//Creating model
let EmailRequest = mongoose.model('EmailRequest', EmailRequestSchema, 'email-requests');

module.exports = {
    EmailRequest //it is an object
}