// import React, { useState } from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// export default function Authfinance() {
//     const [isLogin, setIsLogin] = useState(true)
//     const [username, setUsername] = useState()
//     const [password, setPassword] = useState()
//     const navigate = useNavigate()

//     const handleSubmit= async(e) => {
//         e.preventDefault();

//         const endpoint = isLogin ? 'http://localhost:4000/api/financelogin' : 'http://localhost:4000/api/financesignup';

//         try {
//             const response = await axios.post(endpoint, {username, password});
//             localStorage.setItem('token', response.data.token)
//             navigate('/financedashboard')
//         } catch (error) {
//             console.log(error)
//         }
//     }
//   return (
//     <div style={{ textAlign: 'center', padding: '20px' }}>
//     <h2>{isLogin ? 'Login' : 'Signup'}</h2>
//     <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         required
//         style={{ margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         style={{ margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
//       />
//       <button type="submit" style={{ padding: '10px 20px', border: 'none', backgroundColor: '#28a745', color: '#fff', borderRadius: '4px' }}>
//         {isLogin ? 'Login' : 'Signup'}
//       </button>
//     </form>
//     <button onClick={() => setIsLogin(!isLogin)} style={{ marginTop: '10px', padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px' }}>
//       {isLogin ? 'Switch to Signup' : 'Switch to Login'}
//     </button>
//   </div>
//   )
// }



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AuthFinance() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isLogin ? 'http://localhost:4000/api/financelogin' : 'http://localhost:4000/api/financesignup';

        try {
            const response = await axios.post(endpoint, { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/financedashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>{isLogin ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.submitButton}>
                    {isLogin ? 'Login' : 'Signup'}
                </button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)} style={styles.switchButton}>
                {isLogin ? 'Switch to Signup' : 'Switch to Login'}
            </button>
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        margin: '10px 0',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '16px',
    },
    submitButton: {
        padding: '10px 20px',
        border: 'none',
        backgroundColor: '#28a745',
        color: '#fff',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    submitButtonHover: {
        backgroundColor: '#218838',
    },
    switchButton: {
        marginTop: '10px',
        padding: '10px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s',
    },
    switchButtonHover: {
        backgroundColor: '#0056b3',
    },
};

// Add media queries for responsiveness
const mediaStyles = `
@media (max-width: 768px) {
    ${styles.container} {
        padding: '10px',
    }
    ${styles.title} {
        fontSize: '20px',
    }
    ${styles.input} {
        fontSize: '14px',
    }
    ${styles.submitButton}, ${styles.switchButton} {
        fontSize: '14px',
        padding: '8px 16px',
    }
}
@media (max-width: 480px) {
    ${styles.container} {
        padding: '8px',
    }
    ${styles.title} {
        fontSize: '18px',
    }
    ${styles.input} {
        fontSize: '12px',
    }
    ${styles.submitButton}, ${styles.switchButton} {
        fontSize: '12px',
        padding: '6px 12px',
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = mediaStyles;
document.head.appendChild(styleSheet);
