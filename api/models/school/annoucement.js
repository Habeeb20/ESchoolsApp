import mongoose from "mongoose";
import validator from "validator";

const announcementschema = new mongoose.Schema({
    announcement:{
        type:String,
        required: true
    }
})

const Announcement = mongoose.model("Announcement", announcementschema)
export default Announcement