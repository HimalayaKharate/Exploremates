// creating schema and model

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//creating schema
let userSchema = new Schema({
    name: String,
    email: String,
    password: String
});
//Creating model 
let LoginUser = mongoose.model('LoginUser', userSchema, 'user_login');


module.exports = {
  LoginUser  // export the model
}