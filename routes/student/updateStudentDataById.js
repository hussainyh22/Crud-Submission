const express = require('express');
const router = express.Router();

// const {updateStudentDataById} = require("../../controller/index");
const {Student:{updateStudentDataById}} = require("../../controller/index");

// router.put('/:id', updateStudentDataById);
router.put('/:id', async (req, res) => {
    try {
      await updateStudentDataById(req, res);
    } catch(err) {
      console.log(`Error Updating Student Data - ${err}`);
      return res.status(500).send('Error Updating Student Data');
    }
  });

module.exports = router;
