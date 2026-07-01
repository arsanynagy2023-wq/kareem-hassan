const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    firstName:{
        type:String,
        required:true
    },

    lastName:{
        type:String,
        required:true
    },

    phone:{
        type:String,
        required:true,
        unique:true
    },

    grade:{
        type:String,
        required:true
    },

    gender:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    paid:{
        type:Boolean,
        default:false
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports =
mongoose.model(
    "Student",
    studentSchema
);