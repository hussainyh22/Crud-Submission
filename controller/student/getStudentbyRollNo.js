const studentModel = require("../../models/index");

async function getStudentByRollNo(req, res) {
  //get ID
  const roll = req.params.roll;
  //search in Db
 try{
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
}catch(err){
  console.log(`finding student by roll number  - ${err}`);
  return res.status(500).send('Error Fetching Data');
}
}


module.exports = getStudentByRollNo;