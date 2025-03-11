const studentModel = require("../../models/index");

async function deleteStudentDatabyId(req, res){
    const id = req.params.id;
    try{
        const targetStudent = await studentModel.findByIdAndDelete(id);//redis - clear 
        if(!targetStudent)
          return res.status(404).send(`Sorry Student Was not foud`);
      
        return res.status(200).send(`Successfully Deleted the Student from the Db`);
      }

    catch(err){
      return res.status(500).json({msg: "Error Deleting the requested Student"});
    }
}

module.exports = {
    deleteStudentDatabyId
}