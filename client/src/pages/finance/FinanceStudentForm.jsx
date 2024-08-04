import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
export default function FinanceStudentForm() {
    const [name, setName] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:4000/api/financestudent', {name, amountPaid: Number(amountPaid)});
            setName('')
            setAmountPaid('')
            toast.success("student added successfully")
            navigate('/financedashboard')
        } catch (error) {
            console.error(error)
            toast.error("failed to add student")
        }
    }
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <input
          type="number"
          placeholder="Amount Paid"
          value={amountPaid}
          onChange={(e) => setAmountPaid(e.target.value)}
          required
          style={{ margin: '10px 0', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
        />
        <button
          type="submit"
          style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}
        >
          Add Student
        </button>
      </form>
    </div>
  )
}
