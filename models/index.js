const { timeStamp } = require("console");
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
{
    rollNo:{
        type:Number,
        unique:true,
        required:true,
    },

    fname:{
        type:String,
        required:true,
    },

    lname:{
        type:String,
    },

    gender:{
        type:String,
    },

    cgpa:{
        type:Number,
        required:true,
    },
}, 
{
    timestamps:true,
});


const studentModel = mongoose.model("studentModel", studentSchema);


module.exports = studentModel;