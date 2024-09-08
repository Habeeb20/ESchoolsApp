import {createContext, useReducer, useEffect} from 'react' 


export const TeacherContext = createContext()

export const teacherReducer= (state, action) => {
    switch(action.type){
        case 'LOGIN':
            return {teacher: action.payload}
        case 'LOGOUT':
            return {teacher: null}
        default:
            return state
    }
}

export const TeacherContextProvider = ({children}) => {
    const [state, dispatch] =useReducer(teacherReducer, {
        teacher: null
    })

    useEffect(() => {
        const teacher = JSON.parse(localStorage.getItem("teacher"))

        if(teacher){
            dispatch({type: 'LOGIN', payload:teacher})
        }
    }, [])

    console.log('TeacherContext state', state)

    return(
        <TeacherContext.Provider value= {{...state, dispatch}}>
            {children}
        </TeacherContext.Provider>
    )
}