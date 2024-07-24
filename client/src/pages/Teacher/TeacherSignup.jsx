import { useState } from "react";
import useTeacherAcctSignup from "../../hooks/teacher/useTeacherAcctSignup";

import React from 'react'
import FadeIn from "../../FadeIn";
import TNavbar from "../../components/TNavbar";

export default function TeacherSignup() {
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
        const fontSize ={
          fontSize: "150%"
        }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const{teacherSignUp, isLoading, error} = useTeacherAcctSignup()

    const handleSubmit = async(e) => {
        e.preventDefault();

        await teacherSignUp(email, password)
    }
  return (
     <>
    <TNavbar />
    <FadeIn delay={0.2} direction="left" padding fullWidth> 
       <form className="login1" onSubmit={handleSubmit}>
      <h3 style={fontSize}>Teacher's login</h3>
     
      <label style={label}>Email</label>
      <input style={style}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label style={label}>Password</label>
      <input style={style}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>log in</button>
      {error && <div className="error">{error}</div>}
     
    </form>
    </FadeIn>
    </>

    
  )
}
 