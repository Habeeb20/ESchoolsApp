import mongoose from "mongoose";

const bookstoreSchema = new mongoose.Schema(
    {
        title:{type:String, required: true},
        price: {type: Number, required: true},
        quantity:{type: Number, required: true},
        bookseller:{type: mongoose.Schema.Types.ObjectId, ref: "Bookseller", required: true}
    }
)

const Book =  mongoose.model('Book', bookstoreSchema)
export default Book