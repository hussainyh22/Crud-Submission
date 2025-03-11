const express = require('express');
const router = express.Router();

const {getStudentbyRollNo} = require("../../controller/student/index");

router.get('/:roll', getStudentbyRollNo);

module.exports = router;
