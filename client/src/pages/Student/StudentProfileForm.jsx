import { useState } from "react";
import { useStudentProfileContext } from "../../hooks/student/useStudentProfileContext";
import { useStudentAcctContext } from "../../hooks/student/useStudentAcctContext";
import { DeleteEditStudentProfile } from "../../components/Student/DeleteEditStudentProfile";
import { useNavigate } from "react-router-dom";

import React from 'react'



import Navbar from "../../components/Navbar";
function StudentProfileForm() {
  const {dispatch} = useStudentProfileContext()
    const {user} = useStudentAcctContext()
    const navigate = useNavigate()


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [regNumber, setRegNumber] = useState("");
    const [grade, setGrade] = useState("");
    const [school, setSchool] = useState("");
    const[schoolFees, setSchoolFees] = useState("");
    const[yearsOfAdmission, setYearOfAdmission] = useState("");
    const[error, setError] = useState(null)

    const handleSubmit = async(e) => {
        e.preventDefault()
        navigate('/studenthome')


        if(!user){
            setError("you must be logged in")
            return
        }


        const profile = {firstName,lastName,regNumber,grade,school, schoolFees, yearsOfAdmission}

        try {
            const response = await fetch("http://localhost:4000/api/createstudentProfile", {
                method: 'POST',
                body:JSON.stringify(profile),
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${user.token}`
                },
               
    
            })

            const text = await response.text()

            if(!response.ok){
                let json;
                try {
                    json = JSON.parse(text);

                } catch (error) {
                    throw Error("unexpected server response")
                }
                setError(json.error || "unknown error occured")
                return;
            }

            const json = JSON.parse(text);
            setFirstName('')
            setLastName('')
            setRegNumber('')
            setGrade('')
            setSchool('')
            setSchoolFees('')
            setYearOfAdmission('')
            console.log("new profile created")
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'create_profile', payload:json})
        } catch (error) {
            setError(error.message || 'Network error')
        }
    }

    return(

        <>
        <Navbar />
        {/* { <DeleteEditStudentProfile /> } */}
        <form className="create" onSubmit={handleSubmit} action="">
        <h3>Create Your Profile</h3>
  
        <label htmlFor="">First_Name</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          className=''
        />

        <label htmlFor="">Last_Name</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          className=''
        />
  
  
        <label htmlFor="">Reg_Num:</label>
        <input
          type="number"
          onChange={(e) => setRegNumber(e.target.value)}
          value={regNumber}
          className=''
        />
  
        <label htmlFor="">Grade</label>
        <input
          type="text"
          onChange={(e) => setGrade(e.target.value)}
          value={grade}
          className=''
        />

        <label htmlFor="">School_Name</label>
        <input
          type="text"
          onChange={(e) => setSchool(e.target.value)}
          value={school}
          className=''
        />

        <label htmlFor="">SchoolFees</label>
        <input
          type="text"
          onChange={(e) => setSchoolFees(e.target.value)}
          value={schoolFees}
          className=''
        />

        <label htmlFor="">YearOfAdmission</label>
        <input
          type="text"
          onChange={(e) => setYearOfAdmission(e.target.value)}
          value={yearsOfAdmission}
          className=''
        />
  
  
  
  
        <button>Create</button>
        {error && <div className="error">{error}</div>}
      </form>

        </>
        
    )

  

}

export default StudentProfileForm
