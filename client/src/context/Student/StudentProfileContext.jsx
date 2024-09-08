import { createContext, useReducer } from "react";

import React from "react";

export const StudentProfileContext = createContext()

export const studentProfileReducer = (state, action) => {
    switch(action.type){
        case 'set_profile':
            return{
                profile: action.payload
            }
        case "create_profile":
            return{
                profile: action.payload, ...state.workout
            }
        case "edit_profile":
            return{
                profile:state.profile.map((w) => {
                    if(w._id == action.payload._id){
                        return{...w, ...action.payload};
                    }else {
                        return w;
                    }
                })
            }
        case 'delete_profile' :
            return{
                profile:state.workout.filter((w) => w._id !== action.payload._id)
            }
            default:
                return state
    }
}

export const StudentProfileContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(studentProfileReducer, {
        profile:null // thee null is an initial value 
    })

    return (
        <StudentProfileContext.Provider value={{...state, dispatch}}>
            {children}
        </StudentProfileContext.Provider>
    )
}