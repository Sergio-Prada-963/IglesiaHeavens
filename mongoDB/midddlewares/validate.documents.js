import {validateResult} from "express"
const validateDocuments = (req,res,next)=>{
    const errors = validateResult(req)
    if(!errors.isEmpty())
        return res.status(400).json(errors)
    next()
}
export default validateDocuments;