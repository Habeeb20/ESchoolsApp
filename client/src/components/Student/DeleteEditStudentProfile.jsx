import { useStudentProfileContext } from "../../hooks/student/useStudentProfileContext";
import { useStudentAcctContext } from "../../hooks/student/useStudentAcctContext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { useEffect } from "react";


export const DeleteEditStudentProfile =  ({profile}) => {
    const {dispatch} = useStudentProfileContext()
    const {user} = useStudentAcctContext() 

    const handleDeleteClick = async() => {
        if(!user){
            return
        } try {
            const response = await fetch('http://localhost:4000/api/deletestudentProfile' + profile._id, {
                method: 'DELETE',
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })
            //check if the response status is ok(2xx)
    
            if(response.ok){
                const errorText = await response.text(); // Read raw response text
                let errorJson;
                try {
                    errorJson = JSON.parse(errorText) //Try parsing JSON from the response
                } catch (e) {
                    throw new Error('unexpected server response')
                }
                dispatch({type: 'delete_profile', payload: json})
            }
            
        } catch (error) {
            return error.message
        }
       
    }


    // const handleEditClick = async(updatedProfile) => {
    //     if(!user){
    //         console.error('Error deleting profile ', error.message)
    //         return; //if user is not authenticated, handle accordingly
    //     }

    //     try {
    //         const response = await fetch('http://localhost:4000/api/updatestudentProfile/' + profile._id, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type' : 'application/json',
    //                 'Authorization': `Bearer ${user.token}`
    //             },
    //             body:JSON.stringify(profile) //Convert updated profile to json string
    //         });

    //         if(response.ok){
    //             const updatedProfileJson = await response.json()// Parse response JSON

    //             // Dispatch action to update state with the edited profile

    //             dispatch({type: 'edit_profile', payload: updatedProfileJson})
    //         }else {
    //             throw new Error('failed to update profile')
    //         }
            
    //     } catch (error) {
    //         console.error('Error editing profile ', error.message)
    //         return error.message
    //     }
    // }

    if(!profile){
        return <div>Loading...</div>;
    }

    return(
        <div className='workout-details'>
            <h4><strong>First_Name</strong>{profile.firstName}</h4>
            <h4><strong>Last_Name</strong>{profile.lastName}</h4>
            <p><strong>Reg_Num</strong>{profile.regNumber}</p>
            <p><strong>Grade</strong>{profile.grade}</p>
            <p><strong>School_Name</strong>{profile.School}</p>
            <p><strong>School_Fees</strong>{profile.SchoolFees}</p>
            <p><strong>Year_Of_Admission</strong>{profile.yearsOfAdmission}</p>
            <p>{formatDistanceToNow(new Date(profile.createdAt),{addSuffix: true}) }</p>
            <button><span onClick={handleDeleteClick}>delete</span></button>
            {/* <button><span onClick={handleEditClick}>edit</span></button> */}

        </div>
    )
}