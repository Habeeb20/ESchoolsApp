import { useTeacherAcctContext } from "./useTeacherAcctContext";
import { useStudentAcctContext } from "../student/useStudentAcctContext";
import { useStudentProfileContext } from "../student/useStudentProfileContext";


export const useTeacherLogout = () => {
    const {dispatch} = useTeacherAcctContext()
    const {dispatch: studentDispatch} = useStudentProfileContext()

    const logout =() => {
        //remove user from local storage
        localStorage.removeItem('teacher')

        //dispatch logout action

        dispatch({type:'LOGOUT'})
        studentDispatch({type:'set_workout', payload:null})

    }

    return {logout}
}