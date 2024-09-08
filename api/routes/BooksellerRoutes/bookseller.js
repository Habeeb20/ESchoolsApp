import express from "express";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import Bookseller from "../../models/Bookseller/BookUser.js"
import Book from '../../models/Bookseller/BookStore.js'
const bookrouter = express.Router();

bookrouter.post('/register', async (req, res) => {
    try {
        const { bookstoreName, email, password, address, phone } = req.body;
        const bookseller = new Bookseller({ bookstoreName, email, password, address, phone })
        await bookseller.save();
        res.status(201).json({ message: "Bookseller registered successfully" })
    } catch (error) {
        res.status(400).json({ error: "error occurred during registration" })
    }
});


bookrouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if bookseller exists
    const bookseller = await Bookseller.findOne({ email });
    if (!bookseller) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare entered password with stored hash
    const isMatch = await bcrypt.compare(password, bookseller.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // If credentials are correct, create a JWT token
    const token = jwt.sign(
      { booksellerId: bookseller._id }, // Payload
      process.env.JWT_SECRET,           // Secret key from y environment variables
      { expiresIn: '1h' }               // Token expiration
    );

    // Send the token and bookseller data as response
    res.json({
      token,
      bookseller: {
        _id: bookseller._id,
        email: bookseller.email,
        bookstoreName: bookseller.bookstoreName,
        phone: bookseller.phone,
        address: bookseller.address,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

bookrouter.get('/', async(req, res) => {
    try {
        const bookseller = await Bookseller.find().populate('books').exec()
        res.status(200).json(bookseller)
    } catch (error) {
        console.log(error)
        res.status(400).json("error occurred")
    }
})

export default bookrouter
