import { useState } from "react";
import useTeacherAcctSignup from "../../hooks/teacher/useTeacherAcctSignup";

import React from 'react'
import FadeIn from "../../FadeIn";
import TNavbar from "../../components/TNavbar";

export default function TeacherSignup() {
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
    <form className="signup" onSubmit={handleSubmit}>
            <h3>Teacher's sign up</h3>
            <FadeIn delay={0.2} direction="left" padding fullWidth >
            <label >Email</label>
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

            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}

            </FadeIn>
            

        </form>
    </>
    
  )
}
 