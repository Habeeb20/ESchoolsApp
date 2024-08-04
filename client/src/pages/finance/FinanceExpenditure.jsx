import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function FinanceExpenditure() {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4000/api/expenditure', {description, amount:Number(amount)})
            setDescription('');
            setAmount('');
            toast.success('expenditure added successfully')
            navigate('/financedashboard')
        } catch (error) {
            console.error(error);
            toast.error('failed to add expenditure')
        }
    }
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h2>Add Expenditure</h2>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
      />
      <button
        type="submit"
        style={{ padding: '10px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Add Expenditure
      </button>
    </form>
  </div>
  )
}
