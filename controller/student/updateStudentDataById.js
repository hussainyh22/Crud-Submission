const studentModel = require("../../models/index");

async function updateStudentDataById(req, res) {
  const id = req.params.id;
  const updatedData = req.body;
  try {
    const targetStudent = await studentModel.findByIdAndUpdate(id, updatedData, {new:true, runValidators: true});

    if (!targetStudent) return res.status(404).send(`Error Student Not Found`);

    return res
      .status(200)
      .send(`Successfully Updated ${id}: ${updatedData.fname}`);
  } catch (err) {
    console.log(`Error Updating the Data - ${err}`);
    res.status(500).send(`Error Updating the Data`);
  }
}

module.exports = {
    updateStudentDataById
};