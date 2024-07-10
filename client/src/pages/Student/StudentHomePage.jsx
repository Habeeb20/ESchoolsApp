// // Example parent component
// import React, { useState, useEffect } from 'react';
// import { DeleteEditStudentProfile } from '../../components/Student/DeleteEditStudentProfile';


// const StudentHomePage = () => {
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     // Fetch the profile data and set it
//     const fetchProfile = async () => {
//       const response = await fetch('http://localhost:4000/api/getAllstudentProfile');
//       const profileData = await response.json();
//       setProfile(profileData);
//     };

//     fetchProfile();
//   }, []);

//   return (
//     <div>
//       {profile ? <DeleteEditStudentProfile profile={profile} /> : <div>Loading...</div>}
//     </div>
//   );
// };

// export default StudentHomePage;

import { useState, useEffect } from "react";
import { DeleteEditStudentProfile } from "../../components/Student/DeleteEditStudentProfile";
import { StudentProfileForm } from "./StudentProfileForm";
import { StudentAcctContext } from "../../context/Student/StudentAcctContext";
import { StudentProfileContext } from "../../context/Student/StudentProfileContext";

import React from 'react'
import { useStudentProfileContext } from "../../hooks/student/useStudentProfileContext";
import { useStudentAcctContext } from "../../hooks/student/useStudentAcctContext";
import Navbar from "../../components/Navbar";

export default function StudentHomePage() {
    const {profile = [], dispatch} = useStudentProfileContext()
    const {user} = useStudentAcctContext()

    useEffect(() => {
        const fetchProfile = async () => {
            const res = await fetch('http://localhost:4000/api/getAllstudentProfile', {
                headers:{
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await res.json()

            if(res.ok){
                dispatch({type:'set_profile', payload:json})
            }
        }
        if(user){
            fetchProfile()
        }
    }, [dispatch, user])
  return (
    // <div className="home">
    //     <div className="workout">
    //         {profile && profile.map((profile) => (
    //             <DeleteEditStudentProfile key={profile._id} profile={profile} />
    //         ))}
            
    //     </div>
      
    // </div>
 <>
 <Navbar />
  <div className="home">
    <div className="workout">
        {profile && profile.length > 0 ? (
            profile.map((profile) => (
                <DeleteEditStudentProfile key={profile._id} profile={profile} />
            ))
        ) : (
            <div>No profiles available</div>
        )}
    </div>
</div>
 </>
   
  )
}

