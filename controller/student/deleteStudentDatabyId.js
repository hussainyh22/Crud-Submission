const studentModel = require("../../models/index");

async function deleteStudentDataById(req, res){
    const id = req.params.id;
    try{
        const deletedData = await studentModel.findById(id);
        const targetStudent = await studentModel.findByIdAndDelete(id);//redis - clear 
        if(!targetStudent)
          return res.status(404).send(`Sorry Student Was not foud`);
      
        return res.status(200).send(`Successfully Deleted the Student: ${deletedData.fname} - ${deletedData.lname} - ${deletedData.cgpa} from the Db`);
      }

    catch(err){
      console.log(`Error Deleting the Data - ${err}`);
      return res.status(500).json({msg: "Error Deleting the requested Student"});
    }
}

module.exports = deleteStudentDataById;
