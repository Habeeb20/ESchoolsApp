import { TeacherContext } from "../../context/Teacher/TeacherAccountContext";
import { useContext } from "react";

export const useTeacherAcctContext = () => {
    const context = useContext(TeacherContext)
    if(!context){
        throw new Error("teachercontext has an error")
    }

    return context
}