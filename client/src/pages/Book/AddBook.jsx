// src/components/AddBook/AddBook.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [numReviews, setNumReviews] = useState('');
    const [stockCount, setStockCount] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate("/bookhomepage")

        try {
            const { data } = await axios.post('http://localhost:4000/api/bookpost', {
                title,
                author,
                description,
                price,
                coverImage,
                category,
                rating,
                numReviews,
                stockCount
            });
            setMessage('Book added successfully!');
        } catch (error) {
            setMessage('Failed to add book');
            console.error(error);
        }
    };

    return (
        <div className="add-book-form">
            <h2>Add a New Book</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Cover Image URL</label>
                    <input type="text" value={coverImage} onChange={(e) => setCoverImage(e.target.value)} required />
                </div>
                <div>
                    <label>Category</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <div>
                    <label>Rating</label>
                    <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
                </div>
                <div>
                    <label>Number of Reviews</label>
                    <input type="number" value={numReviews} onChange={(e) => setNumReviews(e.target.value)} required />
                </div>
                <div>
                    <label>Stock Count</label>
                    <input type="number" value={stockCount} onChange={(e) => setStockCount(e.target.value)} required />
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;
