
const express = require('express');
const router = express.Router();

const {deleteStudentDatabyId} = require("../../controller/student/index");
router.delete("/:id", deleteStudentDatabyId);

module.exports = router;
