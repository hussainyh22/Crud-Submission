// const studentModel = require("../models/studentModel");
// const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const {getAllStudentData, getStudentbyRollNo, insertStudentData, updateStudentDataById, deleteStudentDatabyId} = require('../controller/index');

router.get('/', getAllStudentData);
router.get('/:roll', getStudentbyRollNo);
router.post("/", insertStudentData);
router.patch("/:id", updateStudentDataById);
router.delete("/:id", deleteStudentDatabyId);


module.exports = router;