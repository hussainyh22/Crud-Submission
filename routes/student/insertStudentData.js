const express = require('express');
const router = express.Router();

const {insertStudentData} = require("../../controller/student/index");

router.post('/', insertStudentData);

module.exports = router;
