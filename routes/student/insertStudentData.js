const express = require('express');
const router = express.Router();
const {validationMiddleware} = require("../../middlewares/validation");
// const {insertStudentData} = require("../../controller/index");
const {Student: {insertStudentData}} = require("../../controller/");

// router.post('/', insertStudentData);
router.post('/', async (req, res) => {
  try {
     await validationMiddleware(req, res);
    
    await insertStudentData(req, res);
    // await Student.insertStudentData(req, res);
    } catch(err) {
      console.log(`Error Inserting Student Data - ${err}`);
      return res.status(500).send('Error Inserting Student Data');
    }
  });

module.exports = router;
