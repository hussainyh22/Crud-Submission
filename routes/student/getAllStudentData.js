const express = require('express');
const router = express.Router();

// const getAllStudentData = require("../../controller/student/getAllStudentData");
const {Student: {getAllStudentData}} = require("../../controller/");

router.get('/', async (req, res) =>
{
    try{
        // const data = await getAllStudentData;
        // res.status(200).send(data);
        await getAllStudentData(req,res);

    }catch(err){
        console.log(`Error Fetching Data - ${err}`);
        return res.status(500).send('Error Fetching Data');
        // next(err);
    }
});
// router.get('/', (req, res) =>{
//     const data = getAllStudentData(req);
//     res.status(200).send(data);
// });


// module.exports = getAllStudentData;
module.exports = router;