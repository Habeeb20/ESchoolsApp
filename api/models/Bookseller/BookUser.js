import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Book from './BookStore.js'
const bookSellerSchema = new mongoose.Schema(
    {
        bookstoreName: {
            type: String,
            required:[true, 'bookstorename is required'],
        },
        email: {
            type: String,
            required: [true, "email is required"],
        },
        password:{
            type: String,
            required: [true, "password is required"],
        },
        address: {
            type:String,
            required:[true, "address is required"]
        },
        phone:{
            type:String,
            required:[true, "phonenumber is required"]
        },
        books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] 
     
    },
    {timestamps: true}
)

bookSellerSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


export default mongoose.model('Bookseller', bookSellerSchema)