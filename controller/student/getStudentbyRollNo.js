const studentModel = require("../../models/index");

async function getStudentbyRollNo(req, res) {
  //get ID
  const roll = req.params.roll;
  //search in Db
  const target = await studentModel.findOne({ 'rollNo': roll });

  if (!target) {
    return res
      .status(404)
      .json({ error: "Your Entered Roll No. Can't be found" });
  }

  return res
    .status(200)
    .send(
      `${target.rollNo}: ${target.fname} - ${target.lname}: ${target.cgpa}`
    );
}



module.exports = {
    getStudentbyRollNo
};