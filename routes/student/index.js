const express = require("express");
const router = express.Router();
const getAllStudentData = require("./getAllStudentData.js");
const getStudentByRollNo = require("./getStudentByRollNo.js");
// const getStudentDataById = require("./getStudentDataById.js");
const insertStudentData = require("./insertStudentData.js");
const updateStudentDataById = require("./updateStudentDataById.js");
const deleteStudentDataById = require("./deleteStudentDataById.js");


router.use('/all', getAllStudentData);
router.use('/get', getStudentByRollNo);  
router.use('/add', insertStudentData);
router.use('/update', updateStudentDataById);
router.use('/delete', deleteStudentDataById);

// Export the router
module.exports = router;



// module.exports = { 
//     getAllStudentData, 
//     getStudentByRollNo, 
//     // getStudentDataById, 
//     insertStudentData, 
//     updateStudentDataById, 
//     deleteStudentDataById 
// }






// const studentModel = require("../models/studentModel");
// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();

// const {getAllStudentData, getStudentbyRollNo, insertStudentData, updateStudentDataById, deleteStudentDatabyId} = require('../controller/index');

// router.get('/', getAllStudentData);
// router.get('/:roll', getStudentbyRollNo);
// router.post("/", insertStudentData);
// router.patch("/:id", updateStudentDataById);
// router.delete("/:id", deleteStudentDatabyId);


// module.exports = router;