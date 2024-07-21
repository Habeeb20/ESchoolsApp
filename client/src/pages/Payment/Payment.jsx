import React, { useState } from 'react'

const Payment = () => {
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handlePayment = async () => {
        try {
            const {data} = await axios.post('http://localhost:4000/api/paystack/pay', {email, amount});
            window.location.href = data.data.authorization_url;
        } catch (error) {
            console.error("payment initiation failed", error)
        }
    }
  return (
    <div>
       <h2>Paystack Payment</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Pay</button>
    </div>
  )
}

export default Payment
