
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let BuyRequestSchema = new Schema({
    id: String,
    fn: String,
    mn: String,
    ln: String,
    dateD: Date,
    dateR: Date,
    payId: String
})

//Creating model
let BuyRequest = mongoose.model('BuyRequest', BuyRequestSchema, 'buy-requests');

module.exports = {
    BuyRequest //it is an object
}