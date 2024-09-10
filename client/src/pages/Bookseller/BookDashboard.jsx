import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link, useNavigate } from 'react-router-dom';
// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const BookDashboard = () => {
  const [bookData, setBookData] = useState([]);
  const [booksellerId, setBooksellerId] = useState(null);
  const [newBook, setNewBook] = useState({
    title: '',
    price: '',
    quantity: ''
  });

  // Fetch the booksellerId from local storage or after login
  useEffect(() => {
    const id = localStorage.getItem('booksellerId');
    setBooksellerId(id);
  }, []);

  // Fetch books for the bookseller
  useEffect(() => {
    const fetchBooks = async () => {
      if (!booksellerId) return;

      try {
        const response = await axios.get(`http://localhost:4000/api/books/${booksellerId}`);
        setBookData(response.data);
      } catch (error) {
        toast.error('Error fetching books');
      }
    };
    fetchBooks();
  }, [booksellerId]);

  // Handle form inputs
  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleLogout = async () => {
    localStorage.removeItem('token')
    Navigate('/booklogin')
  }

  // Handle form submission to add a new book
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newBook.title || !newBook.price || !newBook.quantity) {
      toast.error('All fields are required');
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/api/books/add`, {
        ...newBook,
        booksellerId,
      });

      // Add the new book to the current bookData
      setBookData([...bookData, response.data]);
      setNewBook({ title: '', price: '', quantity: '' }); // Reset form
      toast.success('Book added successfully!');
    } catch (error) {
        console.log(error)
      toast.error('Error adding the book');
    }
  };

  // Calculate total books and create pie chart data
  const totalBooks = bookData.length;
  const data = {
    labels: ['Books Added', 'Remaining'],
    datasets: [
      {
        data: [totalBooks, 100 - totalBooks],
        backgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  return (
    <div style={{ width: '70%', margin: '0 auto', padding: '20px' }}>
      <h2>Bookseller Dashboard</h2>
      <Link to='/booklogin'><button onChange={handleLogout}>logout</button></Link>
      {booksellerId ? (
        <div>
          <Pie data={data} />
          <h3>Total Books: {totalBooks}</h3>

          {/* Form for adding books */}
          <form onSubmit={handleSubmit} style={{ marginTop: '30px', padding: '20px', border: '1px solid #ccc' }}>
            <h3>Add New Book</h3>
            <div style={{ marginBottom: '10px' }}>
              <label>Book Title</label>
              <input
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={newBook.price}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                required
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={newBook.quantity}
                onChange={handleChange}
                style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                required
              />
            </div>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#36A2EB', color: '#fff' }}>
              Add Book
            </button>
          </form>

          {/* Display the books */}
          <div style={{ marginTop: '30px' }}>
            <h3>Your Books</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              {bookData.map((book) => (
                <div key={book._id} style={{ border: '1px solid #ccc', padding: '15px', width: '250px' }}>
                  <h4>{book.title}</h4>
                  <p>Price: #{book.price}</p>
                  <p>Quantity: {book.quantity}</p>
                  <button
                    style={{ marginTop: '10px', padding: '5px', backgroundColor: 'red', color: 'white' }}
                    onClick={async () => {
                      try {
                        await axios.delete(`http://localhost:4000/api/books/${book._id}`);
                        setBookData(bookData.filter(b => b._id !== book._id)); // Remove the book from UI
                        toast.success('Book deleted');
                      } catch (error) {
                        toast.error('Error deleting the book');
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Please log in to see your dashboard</p>
      )}
    </div>
  );
};

export default BookDashboard;
