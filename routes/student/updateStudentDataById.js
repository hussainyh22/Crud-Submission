const express = require('express');
const router = express.Router();

const {updateStudentDataById} = require("../../controller/student/index");

router.put('/:id', updateStudentDataById);


module.exports = router;
