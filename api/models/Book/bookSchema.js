import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }
}, {
    timestamps: true
});

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    price: Number,
    coverImage: String,
    category: String,
    rating: {type: Number, default: 0},
    numReviews: {type: Number, default: 0},
    reviews: [reviewSchema],
    stockCount: Number,
}, {
    timestamps: true
});

const Book = mongoose.model('Book', bookSchema);
export default Book
