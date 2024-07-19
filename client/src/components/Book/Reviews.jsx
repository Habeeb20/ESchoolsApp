import React, { useState } from 'react';
import axios from 'axios';

const Reviews = ({ book }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        const { data } = await axios.post(`http://localhost:4000/api/book/${book._id}/reviews`, { rating, comment, name: 'Anonymous' });
        console.log(data);
    };

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {book.reviews.map((review) => (
                <div key={review._id} className="review">
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.comment}</p>
                </div>
            ))}
            <form onSubmit={submitHandler}>
                <label>Rating</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="">Select...</option>
                    {[1, 2, 3, 4, 5].map((x) => (
                        <option key={x} value={x}>
                            {x} - {x === 1 ? 'Poor' : x === 2 ? 'Fair' : x === 3 ? 'Good' : x === 4 ? 'Very Good' : 'Excellent'}
                        </option>
                    ))}
                </select>
                <label>Comment</label>
                <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Reviews;
        