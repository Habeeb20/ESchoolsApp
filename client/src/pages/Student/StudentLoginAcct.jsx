import React from 'react'
import { useState } from 'react'
import {useStudentAcctLogin} from '../../hooks/student/useStudentAcctLogin'


export default function StudentLoginAcct() {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { StudentLogin, error, isLoading } = useStudentAcctLogin();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await StudentLogin(email, password);
    };
  
    return (
      <form className="login" onSubmit={handleSubmit}>
        <h3>login</h3>
  
        <label>Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
  
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
  
        <button disabled={isLoading}>log in</button>
        {error && <div className="error">{error}</div>}
      </form>
    );
  
}
