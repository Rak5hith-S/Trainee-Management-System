const mongoose = require('mongoose');

const Users = mongoose.Schema({
  
    empid: 
    {
     type:Number,
     unique: true
    },
    ename: String,
    dob: String,
    email:
    {
        type:String,
        unique:true
    },
    password: String,
    address: String,
    mobileno: Number,
    role: String
});


module.exports = mongoose.model('User', Users);