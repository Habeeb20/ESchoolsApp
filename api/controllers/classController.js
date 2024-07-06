import Class from "../models/classSchema.js";

export const createClass = async( req, res, next) => {
    console.log(req.body);
    const {grade} = req.body;

    try{
        if(!grade) {
            return res.status(400).json({message: "please fill in the form"})

        }

        await Class.create({grade});
        res.status(200).json({
            success: true, message: "class created"
        });
    } catch (error) {
        next(error)
    }

}

export const getAllClasses = async (req, res, next) => {
    try {
        const classes = await Class.find();
        res.status(200).json({
            success: true,
            classes
        })
    } catch (error) {
        next(error)
    }
}