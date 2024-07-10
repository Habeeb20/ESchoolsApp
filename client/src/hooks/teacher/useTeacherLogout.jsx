import { useTeacherAcctContext } from "./useTeacherAcctContext";

import { useStudentAcctContext } from "./useStudentAcctContext";
import { useStudentProfileContext } from "./useStudentProfileContext";

export const useLogout = () => {
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