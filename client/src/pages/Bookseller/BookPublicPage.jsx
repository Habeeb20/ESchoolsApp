import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const BookPublicPage = () => {
  const [booksellers, setBooksellers] = useState([]);



  useEffect(() => {
    const fetchBooksellers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/booksellers');
        
        // Log the type and structure of the response data
        console.log("Response Data:", response.data);
        console.log("Data Type:", typeof response.data);

        // Check if response data is an array
        if (Array.isArray(response.data)) {
          setBooksellers(response.data);
        } else {
          // Handle unexpected response
          console.error("Expected an array but received:", response.data);
          toast.error('Unexpected data format');
        }
        
        toast.success("Successful");
      } catch (error) {
        console.error("Error fetching booksellers:", error);
        toast.error('Error fetching booksellers');
      }
    };
    fetchBooksellers();
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Array.isArray(booksellers) && booksellers.length > 0 ? (
        booksellers.map(seller => (
          <div key={seller._id} style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '300px' }}>
            <h3>{seller.bookstoreName}</h3>
            <p>Address: {seller.address}</p>
            <p>Phone: {seller.phone}</p>
            {Array.isArray(seller.books) && seller.books.length > 0 ? (
              seller.books.map(book => (
                <div key={book._id} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px 0' }}>
                  <p><strong>Title:</strong> {book.title}</p>
                  <p><strong>Price:</strong> ${book.price}</p>
                  <p><strong>Quantity:</strong> {book.quantity}</p>
                </div>
              ))
            ) : (
              <p>No books available</p>
            )}
          </div>
        ))
      ) : (
        <p>No booksellers available</p>
      )}
    </div>
  );
};

export default BookPublicPage;
