import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <div className="book-card">
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <Link to={`/book/${book._id}`}>View Details</Link>
        </div>
    );
};

export default BookCard;
