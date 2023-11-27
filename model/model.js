const mongoose = require("mongoose");

const sch = new mongoose.Schema({

    first_name:{
        type :String,
        required : true,
    },
    last_name:{
        type :String,
        required : true,
    },
    email:{
        type :String,
        required : true,
        unique : true,
    },
    gender:{
        type :String,
        required : true,
    },

});


const user =  mongoose.model("user",sch);

module.exports = user;