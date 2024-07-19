// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BookCard from '../../components/Book/BookCard';


// const BookHomePage = () => {
//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             const { data } = await axios.get('http://localhost:4000/api/book');
//             setBooks(data);
//         };

//         fetchBooks();
//     }, []);

//     return (
//         <div className="home-page">
//             <h1>New Arrivals</h1>
//             <div className="book-list">
//                 {books.map(book => (
//                     <BookCard key={book._id} book={book} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BookHomePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../../components/Book/BookCard';
import { Link } from 'react-router-dom';

const BookHomePage = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                // const { data } = await axios.get('http://localhost:4000/api/book');
                // if(data){
                //     setBooks(data)
                // }
                const { data } = await axios.get('http://localhost:4000/api/book');
                setBooks(Array.isArray(data) ? data : []);
                // // Check if data is an array
               
            } catch (err) {
                setError('Failed to fetch books');
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="home-page">
            <Link to="/addbook"><button>add book</button></Link>
            <h1>New Arrivals</h1>
            <div className="book-list">
                {books.map(book => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookHomePage;
