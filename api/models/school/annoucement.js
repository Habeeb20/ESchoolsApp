import mongoose from "mongoose";
import validator from "validator";

const announcementschema = new mongoose.Schema({
    announcementschema:{
        type:String,
        required: true
    }
})

const Announcement = mongoose.model("Announcement", announcementschema)
export default Announcement