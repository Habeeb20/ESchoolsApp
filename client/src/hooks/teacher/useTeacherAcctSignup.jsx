import { useState } from "react";
import { useTeacherAcctContext } from "./useTeacherAcctContext";
import React from 'react'

export default function useTeacherAcctSignup() {
    const[error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const {dispatch} = useTeacherAcctContext();

    const teacherSignUp = async(email, password) => {
        setIsLoading(true);
        setError(null);


        try {
            const response = await fetch('http://localhost:4000/api/createTeacherAccount', {
                method: 'POST',
                headers: {'Content-Type' :'application/json'},
                body:JSON.stringify({email, password})
            });

            const text = await response.text();
            if(!response.ok){
                let json;
                try {
                    json = JSON.parse(text);
                } catch (error) {
                    throw new Error('unexpected server response')
                }
                setIsLoading(false)
                setError(json.error || 'unknown error occured')
                return;
            }

            const json = JSON.parse(text);
            localStorage.setItem('teacher', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setError(err.message || 'Network error');
        }
    }
    
  return {teacherSignUp, isLoading, error}
}
