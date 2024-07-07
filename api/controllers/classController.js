import Class from "../models/classSchema.js";

export const createClass = async( req, res, next) => {
    console.log(req.body);
    const {grade} = req.body
   

    try{
        const grade1= await Class.create({grade});
        if(!grade1){
            return res.status(404).json("an error occured")
        }
        return res.status(201).json(grade1);
    } catch (error) {
        next(error)
    }

}

export const getAllClasses = async (req, res, next) => {
    console.log(req.body)
  
    try {
        const grade= await Class.find();
        if(!grade){
            res.status(404).json("an error occured")
        }
        res.status(200).json(grade)
    } catch (error) {
        next(error)
    }
}

export const getAClass = async (req, res, next) => {
    console.log(req.body)
    const {id} = req.params
    try {
         const grade = await Class.findById(id);
        if(!grade){
            return res.status(404).json("an error occured")
        }
        return res.status(200).json(grade)
    } catch (error) {
        next(error)
    }
}