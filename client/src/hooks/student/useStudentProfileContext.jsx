import { StudentProfileContext } from "../../context/Student/StudentProfileContext";
import { useContext } from "react";

export const useStudentProfileContext = () => {
    const context= useContext(StudentProfileContext)

    if(!context){
        throw Error('useStudentProfileContext has an error')
    }

    return context
}