import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookRegister = () => {
  const [formData, setFormData] = useState({
    bookstoreName: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation check
    if (!formData.bookstoreName || !formData.email || !formData.password || !formData.address || !formData.phone) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:4000/api/booksellers/register', formData);
      toast.success('Registration successful!');
      setFormData({
        bookstoreName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
      });
      navigate('/booklogin'); // Redirect to login page
    } catch (error) {
      console.error('Error registering:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Error registering the bookseller details');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto' }}>
      <input
        type="text"
        name="bookstoreName"
        placeholder="Bookstore Name"
        value={formData.bookstoreName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
};

export default BookRegister;
