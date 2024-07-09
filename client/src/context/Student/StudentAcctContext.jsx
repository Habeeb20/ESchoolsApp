import { createContext, useReducer, useEffect } from "react";


export const StudentAcctContext = createContext()

export const  studentAuthReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {user: action.payload}
        case 'LOGOUT':
            return {user: null}
        default: 
            return state
    }
}

export const StudentAcctContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(studentAuthReducer, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))

        if(user){
            dispatch({type: 'LOGIN', payload:user})
        }
    }, [])
    console.log("studentAcctContext state : ", state)

    return (
        <StudentAcctContext.Provider value={{...state, dispatch}}>
            {children}
        </StudentAcctContext.Provider>
    )
}