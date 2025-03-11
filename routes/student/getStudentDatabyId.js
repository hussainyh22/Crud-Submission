const express = require('express');
const router = express.Router();

const {getStudentDatabyId} = require("../../controller/student/index");

router.get('/', getStudentDatabyId);

module.exports = router;
