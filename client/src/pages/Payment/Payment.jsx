// import React, { useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// const Payment = () => {
//     const location = useLocation();
//     const [email, setEmail] = useState('');
//     const [amount, setAmount] = useState('');

//     useEffect(() => {
//         if (location.state && location.state.amount) {
//             setAmount(location.state.amount);
//         }
//     }, [location.state]);


//     const handlePayment = async () => {
//         try {
//             const {data} = await axios.post('http://localhost:4000/api/paystack/pay', {email, amount});
//             window.location.href = data.data.authorization_url;
//         } catch (error) {
//             console.error("payment initiation failed", error)
//         }
//     }

//     const styles = {
//         container: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: '20px',
//             backgroundColor: '#f0fdf4',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//             maxWidth: '400px',
//             margin: 'auto',
//             marginTop: '50px',
//         },
//         heading: {
//             color: '#065f46',
//             marginBottom: '20px',
//         },
//         input: {
//             width: 'calc(100% - 20px)',
//             padding: '10px',
//             margin: '10px 0',
//             borderRadius: '5px',
//             border: '1px solid #065f46',
//         },
//         button: {
//             padding: '10px 20px',
//             backgroundColor: '#34d399',
//             color: '#fff',
//             border: 'none',
//             borderRadius: '5px',
//             cursor: 'pointer',
//             marginTop: '20px',
//         },
//     };
//   return (
   
//     <div style={styles.container}>
//             <h2 style={styles.heading}>Paystack Payment</h2>
//             <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={styles.input}
//                 required
//             />
//             <input
//                 type="number"
//                 placeholder="Amount"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 style={styles.input}
//                 required
//             />
//             <button onClick={handlePayment} style={styles.button}>
//                 Pay
//             </button>
//         </div>
//   )
// }

// export default Payment


import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Payment = () => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (location.state && location.state.amount) {
            setAmount(location.state.amount);
        }
    }, [location.state]);

    const handlePayment = async () => {
        try {
            const { data } = await axios.post('http://localhost:4000/api/paystack/pay', { email, amount });
            window.location.href = data.data.authorization_url;
        } catch (error) {
            console.error("payment initiation failed", error);
        }
    };

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backgroundColor: '#f0fdf4',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '50px',
        },
        heading: {
            color: '#065f46',
            marginBottom: '20px',
        },
        input: {
            width: 'calc(100% - 20px)',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            border: '1px solid #065f46',
        },
        button: {
            padding: '10px 20px',
            backgroundColor: '#34d399',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Paystack Payment</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={styles.input}
                required
            />
            <button onClick={handlePayment} style={styles.button}>
                Pay
            </button>
        </div>
    );
};

export default Payment;
