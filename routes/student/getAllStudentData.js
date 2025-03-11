const express = require('express');
const router = express.Router();

const {getAllStudentData} = require("../../controller/student/index");

router.get('/', getAllStudentData);
// router.get('/', (req, res) =>{
//     const data = getAllStudentData(req);
//     res.status(200).send(data);
// });


// module.exports = getAllStudentData;
module.exports = router;








// async function getAllStudentData(req, res) {
//     try {
//       res.status(200).send("Fetching all students...");
//     } catch (err) {
//       console.log(`Error Fetching Data - ${err}`);
//       res.status(500).send("Error Fetching Data");
//     }
//   }
  
//   module.exports = { getAllStudentData };
  