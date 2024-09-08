// import { useState } from "react";
// import { useStudentAcctContext } from "./useStudentAcctContext";

// import React from 'react'

// export default function useStudentAcctSignup() {
//     const[error, setError] = useState(null)
//     const[isLoading, setIsLoading] = useState(null)
//     const {dispatch} = useStudentAcctContext()

//     const studentSignup = async(email, regNumber, password) => {
//         setIsLoading(true)
//         setError(null)

//         const response = await fetch('/api/createstudentAccount', {
//             method: 'POST',
//             headers:{'Content-Type': 'application/json'},
//             body:JSON.stringify({email, regNumber, password})
//         })

//         const json = await response.json()

//         if(!response.ok){
//             setIsLoading(false)
//             setError(json.error)
//         }

//         if(response.ok){
//             localStorage.setItem('user', JSON.stringify(json))

//             dispatch({type: 'LOGIN', payload:json})
//             setIsLoading(false)
//         }
//     }
//   return  {studentSignup, isLoading, error}
// }


import { useState } from 'react';
import { useStudentAcctContext } from './useStudentAcctContext';
import React from 'react';

export default function useStudentAcctSignup() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useStudentAcctContext();

  const StudentSignup = async (email, regNumber, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/api/createstudentAccount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, regNumber, password }),
      });

      const text = await response.text();

      if (!response.ok) {
        let json;
        try {
          json = JSON.parse(text);
        } catch (e) {
          throw new Error('Unexpected server response');
        }
        setIsLoading(false);
        setError(json.error || 'Unknown error occurred');
        return;
      }

      const json = JSON.parse(text);

      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Network error');
    }
  };

  return { StudentSignup, isLoading, error };
}
