import mongoose from "mongoose"

const AdminSchoolOwnerSchema = new mongoose.Schema({
    username: String,
    password: String
});

const AdminSchoolOwner = mongoose.model("AdminSchoolOwner", AdminSchoolOwnerSchema)

export default AdminSchoolOwner