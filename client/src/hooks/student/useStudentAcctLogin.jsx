// import { useState } from "react";
// import { useStudentAcctContext } from "./useStudentAcctContext";

// import React from 'react'

// export const useStudentAcctLogin =() => {
//     const [error, setError] = useState(null)
//     const[isLoading, setIsLoading] = useState(null)
//     const{dispatch} = useStudentAcctContext()

//     const StudentLogin = async(email, password) => {
//         setIsLoading(true)
//         setError(null)

//         const response = await fetch('/api/loginstudentAcount', {
//             method:'POST',
//             headers: {'content-Type': 'application/json'},
//             body:JSON.stringify({email, password})
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
//   return {StudentLogin, isLoading, error}
// }


import { useState } from 'react';
import { useStudentAcctContext } from './useStudentAcctContext';

export const useStudentAcctLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useStudentAcctContext();

  const StudentLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:4000/api/loginstudentAcount', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      // Check if the response status is OK (2xx)
      if (!response.ok) {
        const errorText = await response.text(); // Read raw response text
        let errorJson;
        try {
          errorJson = JSON.parse(errorText); // Try parsing JSON from the response
        } catch (e) {
          throw new Error('Unexpected server response');
        }
        setIsLoading(false);
        setError(errorJson.error || 'Unknown error occurred');
        return;
      }

      const json = await response.json();

      localStorage.setItem('user', JSON.stringify(json));
      dispatch({ type: 'LOGIN', payload: json });
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message || 'Network error');
    }
  };

  return { StudentLogin, isLoading, error };
};
