const Joi = require("joi");

const validationMiddleware = (req, res, next) =>{
    const validateSchema = Joi.object().keys({
        rollNo: Joi.number().min(1).max(99).required(),
        fname: Joi.string().min(1).max(30).required(),
        lname: Joi.string(),
        cgpa: Joi.number().min(0).max(10).required()
    }).unknown(true);//won't allow unknown fields
    const response = validateSchema.validate(req.body, {abortEarly: false});//shows all errors
    if(response.error){
        console.log(`Error:  ${response.error}`);
        // console.log(`Error: ${response.error.details[0].message} : ${response.error}`);
        return res.status(400).send(response.error);
        // return res.status(400).send(response.error.details[0].message);
    }
    next;
}


module.exports = {validationMiddleware};