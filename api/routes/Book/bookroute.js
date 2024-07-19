
import express from 'express';
import Book from '../../models/Book/bookSchema.js';

const bookroute = express.Router();

// Other routes...

// Add a new review
bookroute.post('/book/:id/reviews', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        const { rating, comment, name } = req.body;

        if (book) {
            const review = {
                name,
                rating: Number(rating),
                comment
            };

            book.reviews.push(review);
            book.numReviews = book.reviews.length;
            book.rating = book.reviews.reduce((acc, item) => item.rating + acc, 0) / book.reviews.length;

            await book.save();
            res.status(201).json({ message: 'Review added' });
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



//post books

bookroute.post('/bookpost', async (req, res) => {
    try {
        const {  title, author, description, price, coverImage, category, rating, numReviews, stockCount} = req.body

        const books = await Book.create({ title, author, description, price, coverImage, category, rating, numReviews, stockCount});
        if(books){
            console.log("successfully created")
            res.status(200).json(books);
        }
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get all books
bookroute.get('/book', async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get book by ID
bookroute.get('/book/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default bookroute;
