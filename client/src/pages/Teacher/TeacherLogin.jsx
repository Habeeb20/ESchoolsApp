import { useState } from "react";
import useTeacherAcctLogin from "../../hooks/teacher/useTeacherAcctLogin";
import FadeIn from "../../FadeIn";
import Navbar from "../../components/Navbar";
import TNavbar from "../../components/TNavbar";
import React from 'react'

function TeacherLogin() {

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
  const [email, setEmail ] = useState("");
  const [password, setPassword] = useState("")
  const {teacherLogin, error,isLoading  } = useTeacherAcctLogin();
  
  const handleSubmit = async(e) => {
      e.preventDefault();
      await teacherLogin(email, password)
  }

  return (
    <>
    <TNavbar />
    <FadeIn delay={0.2} direction="right" padding fullWidth> 
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

export default TeacherLogin


// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

// export default function TeacherLogin() {
//   return (
//     <header>
//       <SignedOut>
//         <SignInButton />
//       </SignedOut>
//       <SignedIn>
//         <UserButton />
//       </SignedIn>
//     </header>
//   )
// }