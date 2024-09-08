import React from 'react'
import { useState } from 'react'
import {useStudentAcctLogin} from '../../hooks/student/useStudentAcctLogin'
import FadeIn from '../../FadeIn';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function StudentLoginAcct() {

  const style ={
    padding: "10px",
    marginTop: "10px",
    marginBottom: "20px",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "4px",
    boxSizing: "border-box",
}

    const label={
      display :"block"
    }
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { StudentLogin, error, isLoading } = useStudentAcctLogin();
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
      e.preventDefault();
      await StudentLogin(email, password);
      navigate('/landinghome')
    };
  
    return (
      <>
      <Navbar/>
      <FadeIn delay={0.2} direction="right" padding fullWidth>
      <form className="login1" onSubmit={handleSubmit}>
        <h3>user's Login</h3>
  
        <label style={label}>Email</label>
        <input style={style}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
  
        <label style={label}>Password</label>
        <input style = {style}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
  
        <button disabled={isLoading}>log in</button>
        {error && <div className="error">{error}</div>}
      </form>
      </FadeIn>
      </>
      
    );
  
}
