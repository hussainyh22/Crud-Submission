const {getAllStudentData} = require("./getAllStudentData");
const {getStudentbyRollNo} = require("./getStudentbyRollNo");
const {insertStudentData} = require("./insertStudentData");
const {updateStudentDataById} = require("./updateStudentDataById");
const {deleteStudentDatabyId} = require("./deleteStudentDatabyId");


module.exports = {
  getAllStudentData,
  getStudentbyRollNo,
  insertStudentData,
  updateStudentDataById,
  deleteStudentDatabyId
};
