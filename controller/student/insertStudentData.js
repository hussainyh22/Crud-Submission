const studentModel = require("../../models/index");

async function insertStudentData(req, res) {
  const body = req.body;

  try{

  if (!body.rollNo || !body.fname || !body.cgpa) {
    //validating
    return res.status(400).json({ msg: "Please Enter all Required Fields" });
  }

 const result = await studentModel.create({
    rollNo: body.rollNo,
    fname: body.fname,
    lname: body.lname,
    gender: body.gender,
    cgpa: body.cgpa,
  });

  return res
    .status(201)
    .send(`Successfully Inserted ${body.rollNo}: ${body.fname} into the Db`);
}
catch(err){
  console.log(`Error Inserting Data - ${err}`);
  return res.status(500).send('Error Inserting Data');
}
}


// module.exports = {
//     insertStudentData
// };

module.exports = insertStudentData;