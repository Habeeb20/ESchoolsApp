import { useState } from "react";
import useStudentAcctSignup from "../../hooks/student/useStudentAcctSignup";
import { useNavigate } from "react-router-dom";
import React from 'react'
import FadeIn from "../../FadeIn";
import Navbar from "../../components/Navbar";

export default function StudentSignupAcct() {
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

        const login1 = {
            maxWidth:"400px",
            margin:"40px auto",
            padding: "20px",
            background: "#fff",
            borderRadius: "4px"
        }

    const [email, setEmail] = useState('')
    const [regNumber, setRegNumber] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const {StudentSignup, error, isLoading}  = useStudentAcctSignup()


    const handleSubmit = async (e) => {
        e.preventDefault()
     


        await StudentSignup(email,regNumber, password)
        navigate('/landinghome')
        

    }

    return(
        <>
        <Navbar />
        <FadeIn delay={0.2} direction="right" padding fullWidth>
         <form className="login1" onSubmit={handleSubmit}>
            <h3>user's Sign up</h3>
            

           

            <label style={label}>Email</label>
            <input style={style}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label style={label} >Reg Number</label>
            <input style={style}
                type="text"
                onChange={(e) => setRegNumber(e.target.value)}
                value={regNumber}
            />


            <label style={label}>Password</label>
            <input style={style}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button disabled={isLoading}>Sign up</button>
            {error && <div className="error">{error}</div>}
            
        </form>
        </FadeIn>

        </>
       
    )
}
