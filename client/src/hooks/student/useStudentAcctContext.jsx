import { StudentAcctContext } from "../../context/Student/StudentAcctContext";
import { useContext } from "react";

export const useStudentAcctContext = () => {
    const context = useContext(StudentAcctContext)
    if(!context){
        throw Error ('useStudentAcctContext has an error')
    }

    return context
}