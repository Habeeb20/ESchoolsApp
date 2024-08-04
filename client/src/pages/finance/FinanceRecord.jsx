import React, { useState } from 'react'
import axios from 'axios'


export default function FinanceRecord() {
    const [studentId, setStudentId] = useState('')
    const [amountPaid, setAmountPaid] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:4000/api/financestudent/${studentId}`, {amountPaid: Number(amountPaid)})
            setStudentId('');
            setAmountPaid('');
            alert('Payment recorded successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to record payment');
          }
        
    }
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
    <h2>Record Payment</h2>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
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
        style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}
      >
        Record Payment
      </button>
    </form>
  </div>
  )
}
