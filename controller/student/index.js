const getAllStudentData = require("./getAllStudentData");
const getStudentByRollNo = require("./getStudentByRollNo");
const insertStudentData = require("./insertStudentData");
const updateStudentDataById = require("./updateStudentDataById");
const deleteStudentDataById = require("./deleteStudentDataById");
// console.log('getAllStudentData in controller index:', typeof getAllStudentData);

// module.exports = {
//   getAllStudentData: getAllStudentData,
//   getStudentByRollNo:getStudentByRollNo,
//   insertStudentData: insertStudentData,
//   updateStudentDataById: updateStudentDataById,
//   deleteStudentDataById: deleteStudentDataById
// };


module.exports = {
  getAllStudentData,
  getStudentByRollNo,
  insertStudentData,
  updateStudentDataById,
  deleteStudentDataById
};












// const studentModel = require("../../models/index");
// async function getAllStudentData(req, res) 
// {
//   const studentData = await studentModel.find({});
//   const html = `<ul>
//         ${studentData
//           .map(
//             (s) =>
//               `<li>${s.rollNo} - ${s.fname} - ${s.cgpa}</li>\n`).join("")}
//     </ul>`;

//   return res.status(200).send(html);
// }

// async function getStudentbyRollNo(req, res) {
//   //get ID
//   const roll = req.params.roll;
//   //search in Db
//   const target = await studentModel.findOne({ 'rollNo': roll });

//   if (!target) {
//     return res
//       .status(404)
//       .json({ error: "Your Entered Roll No. Can't be found" });
//   }

//   return res
//     .status(200)
//     .send(
//       `${target.rollNo}: ${target.fname} - ${target.lname}: ${target.cgpa}`
//     );
// }

// async function insertStudentData(req, res) {
//   const body = req.body;

//   if (!body.rollNo || !body.fname || !body.cgpa) {
//     //validating
//     return res.status(400).json({ msg: "Please Enter all Required Fields" });
//   }

//  const result = await studentModel.create({
//     rollNo: body.rollNo,
//     fname: body.fname,
//     lname: body.lname,
//     gender: body.gender,
//     cgpa: body.cgpa,
//   });

//   return res
//     .status(201)
//     .send(`Successfully Inserted ${body.rollNo}: ${body.fname} into the Db`);
// }

// async function updateStudentDataById(req, res) {
//   const id = req.params.id;
//   const updatedData = req.body;
//   try {
//     const targetStudent = await studentModel.findByIdAndUpdate(id, updatedData, {new:true, runValidators: true});

//     if (!targetStudent) return res.status(404).send(`Error Student Not Found`);

//     return res
//       .status(200)
//       .send(`Successfully Updated ${id}: ${updatedData.fname}`);
//   } catch (err) {
//     console.log(`Error Updating the Data - ${err}`);
//     res.status(500).send(`Error Updating the Data`);
//   }
// }

// async function deleteStudentDatabyId(req, res){
//     const id = req.params.id;
//     try{
//         const targetStudent = await studentModel.findByIdAndDelete(id);
//         if(!targetStudent)
//           return res.status(404).send(`Sorry Student Was not foud`);
      
//         return res.status(200).send(`Successfully Deleted the Student from the Db`);
//       }

//     catch(err){
//       return res.status(500).json({msg: "Error Deleting the requested Student"});
//     }
// }

// module.exports = {
//   getAllStudentData,
//   getStudentbyRollNo,
//   insertStudentData,
//   updateStudentDataById,
//   deleteStudentDatabyId
// };
