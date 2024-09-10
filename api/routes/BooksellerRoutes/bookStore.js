import express from "express";
import Book from "../../models/Bookseller/BookStore.js"
const bookstoreRouter = express.Router();

bookstoreRouter.post("/add", async( req, res) => {
    try {
        const { title, price, quantity, booksellerId } = req.body;
        const book = new Book({ title, price, quantity, bookseller: booksellerId });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'Error adding book' });
    }
});


bookstoreRouter.get('/:booksellerId', async(req, res) => {
    try {
        const books = await Book.find({bookseller: req.params.booksellerId})
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching books' });
    }
})

bookstoreRouter.delete('/:id', async(req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message: 'Book deleted successfully'})
    } catch (error) {
        res.status(400).json({error: 'error deleting book'})
    }
})

bookstoreRouter.get('/', async(req, res) => {
    try {
        const bookseller = await Book.find()
        res.status(200).json(bookseller)
    } catch (error) {
        console.log(error)
        res.status(400).json({error: 'error fetching the books '});
    }
})

export default bookstoreRouter;