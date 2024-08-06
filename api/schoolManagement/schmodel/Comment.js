import mongoose from "mongoose";
const Schema = mongoose.Schema
const schComment = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'SchStudent', required: true },
  subject: { type: String, required: true },
  midTermScore: { type: Number, required: true },
  examScore: { type: Number, required: true },
  totalScore: { type: Number, required: true },
  report:{type:String, required:true}
})

const SchComment = mongoose.model("SchComment", schComment)

export default SchComment