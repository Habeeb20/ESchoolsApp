import { useState } from "react";
import useTeacherAcctLogin from "../../hooks/teacher/useTeacherAcctLogin";
import FadeIn from "../../FadeIn";
import Navbar from "../../components/Navbar";
import TNavbar from "../../components/TNavbar";
export const TeacherLogin = () => {
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
         <form className="login" onSubmit={handleSubmit}>
        <h3>Teacher's login</h3>
        <FadeIn delay={0.2} direction="right" padding fullWidth> 
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
        </FadeIn>
      </form>
      </>


    )
}