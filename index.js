const express = require('express');
const app =  express();
const { connect } = require('http2');
const studentRouter = require("./routes/index");
const {connectMongoose} = require("./connection");
const PORT = 8001;

app.use(express.urlencoded({extended:false}));
app.use("/student", studentRouter);

connectMongoose("mongodb://localhost:27017/studentData")
.then(() => console.log(`MongoDb is Connected!`))
.catch((err) => console.log(`Error Occured During MongoDb Connection - ${err}`));


app.listen(PORT, ()=> console.log(`Server Started on Port: ${PORT}`));