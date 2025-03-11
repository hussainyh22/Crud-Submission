const express = require('express');
const router = express.Router();

const getAllStudentData = require("./getAllStudentData");
const getStudentbyRollNo = require("./getStudentbyRollNo");
const insertStudentData = require("./insertStudentData");
const updateStudentDataById = require("./updateStudentDataById");
const deleteStudentDatabyId = require("./deleteStudentDatabyId");


// const {getStudentbyRollNo, insertStudentData, updateStudentDataById, deleteStudentDatabyId} = require('../controller/index');
// router.use('/getAllStudentData', getAllStudentData);


router.get('/', getAllStudentData);
router.get('/:roll', getStudentbyRollNo);
router.post("/", insertStudentData);
router.put("/:id", updateStudentDataById);
router.delete("/:id", deleteStudentDatabyId);




// router.use('/', getAllStudentData);
// router.use("/", insertStudentData);
// router.use('/:roll', getStudentbyRollNo);
// router.use("/:id", updateStudentDataById);
// router.use("/:id", deleteStudentDatabyId);


module.exports = router;















// const express = require("express");
// const router = express.Router();
// const { 
//     getAllStudentData, 
//     getStudentbyRollNo, 
//     insertStudentData, 
//     updateStudentDataById, 
//     deleteStudentDatabyId 
// } = require("../../controller/student");

// router.get("/test", (req, res) => {
//     res.send("Student route is working!");
// });

// router.get("/", getAllStudentData);
// router.get("/:roll", getStudentbyRollNo);
// router.post("/", insertStudentData);
// router.put("/:id", updateStudentDataById);
// router.delete("/:id", deleteStudentDatabyId);

// module.exports = router;
