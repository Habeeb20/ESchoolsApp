import { useState } from "react";
import useStudentAcctSignup from "../../hooks/student/useStudentAcctSignup";

import React from 'react'
import FadeIn from "../../FadeIn";
import Navbar from "../../components/Navbar";

export default function StudentSignupAcct() {
    const [email, setEmail] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [password, setPassword] = useState('')
    
    const {StudentSignup, error, isLoading}  = useStudentAcctSignup()


    const handleSubmit = async (e) => {
        e.preventDefault()

        await StudentSignup(email,regNumber, password)

        

    }

    return(
        <>
        <Navbar />
         <form className="signup" onSubmit={handleSubmit}>
            <h3>student's Sign up</h3>
            <FadeIn delay={0.2} direction="right" padding fullWidth>

           

            <label >Email</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label >Reg Number</label>
            <input
                type="text"
                onChange={(e) => setRegNumber(e.target.value)}
                value={regNumber}
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
