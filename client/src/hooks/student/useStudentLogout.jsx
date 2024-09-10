import { useStudentAcctContext } from "./useStudentAcctContext";
import { useStudentProfileContext } from "./useStudentProfileContext";

export const useLogout = () => {
    const {dispatch} = useStudentAcctContext()
    const {dispatch: studentDispatch} = useStudentProfileContext()

    const logout =() => {
        //remove user from local storage
        localStorage.removeItem('user')

        //dispatch logout action

        dispatch({type:'LOGOUT'})
        studentDispatch({type:'set_workout', payload:null})

    }

    return {logout}
}