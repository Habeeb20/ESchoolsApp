import { useState } from "react";
import { useTeacherAcctContext } from "./useTeacherAcctContext";

import React from 'react'

export default function useTeacherAcctLogin() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useTeacherAcctContext();

    const teacherLogin = async(email, password) => {
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch('http://localhost:4000/api/loginTeacherAcount', {
                method: "POST",
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify({email, password})
            })

            //check if the response is OK
            if(!response.ok){
                const errorText = await res.text(); //read raw response text
                let errorJson;
                try {
                    errorJson = JSON.parse(errorText); //Try parsing JSON from the response
                } catch (error) {
                    throw new Error('unexpected server response')
                }
                setIsLoading(false);
                setError(errorJson.error || 'Unknown error occured');
                return
            }

            const json = await res.json()

            localStorage.setItem('teacher', JSON.stringify(json));
            dispatch({type: 'LOGIN', payload:json});
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false)
            setError(error.message || 'Network error')
        }

    }
  return {teacherLogin, isLoading, error};
}
