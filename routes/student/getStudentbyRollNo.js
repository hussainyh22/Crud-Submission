const express = require('express');
const router = express.Router();

const {Student: {getStudentByRollNo}} = require("../../controller/");

// router.get('/:roll', getStudentbyRollNo);
router.get('/:roll', async (req, res) =>
    {
        try
        {
            // const data = await getAllStudentData;
            // res.status(200).send(data);
            await getStudentByRollNo(req,res);
        }
        catch(err){
            console.log(`Error Fetching Data - ${err}`);
            return res.status(500).send('Error Fetching Data');
        }
    });

module.exports = router;
