
const express = require('express');
const router = express.Router();

const {Student: {deleteStudentDataById}} = require("../../controller");
// router.delete("/:id", deleteStudentDatabyId);

router.delete("/:id", async (req, res) => {
    try {
      await deleteStudentDataById(req, res);
    } catch(err) {
      console.log(`Error Deleting Student Data - ${err}`);
      return res.status(500).send('Error Deleting Student Data');
    }
  });

module.exports = router;
