const studentModel = require("../../models/index");
async function getAllStudentData(req, res) 
{
  try{
  const studentData = await studentModel.find({});
  if (!studentData || studentData.length === 0) {
    return res.status(404).send('No student data found');
  }

  const html = `<ul>
        ${studentData
          .map(
            (s) =>
              `<li>${s.rollNo} - ${s.fname} - ${s.cgpa} - ${s.id}</li>\n`).join("")}
    </ul>`;

    return res.status(200).send(html);
    // return res.send(html);
  // return html;
} catch(err){
  console.log(`Error Fetching Data - ${err}`);
  return res.status(500).send('Error Fetching Data');
}
}

module.exports = getAllStudentData;