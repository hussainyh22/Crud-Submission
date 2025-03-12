const express = require('express');
const router = express.Router();

const {Student: {getStudentDataById}} = require("../../controller/");

// router.get('/:id', getStudentDataById);
router.get('/:id', async (req, res) => {
    try {
      await getStudentDataById(req, res);
    } catch(err) {
      console.log(`Error Fetching Student Data by ID - ${err}`);
      return res.status(500).send('Error Fetching Student Data by ID');
    }
  });

module.exports = router;
