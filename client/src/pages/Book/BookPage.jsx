import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Rating from '../../components/Book/Rating';
import Reviews from '../../components/Book/Reviews';


const BookPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchBook = async () => {
            const { data } = await axios.get(`http://localhost:4000/api/book/${id}`);
            setBook(data);
        };

        fetchBook();
    }, [id]);

    const addToCartHandler = () => {
        // Add to cart logic
    };

    return (
        <div className="book-page">
            <img src={book.coverImage} alt={book.title} />
            <h2>{book.title}</h2>
            <h3>by {book.author}</h3>
            <Rating value={book.rating} text={`${book.numReviews} reviews`} />
            <p>{book.description}</p>
            <p>${book.price}</p>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={addToCartHandler}>Add to Cart</button>
            <Reviews book={book} />
        </div>
    );
};

export default BookPage;
