// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getTeachers, deleteTeacher } from './TeacherRedux/TeacherActions';


// const TeachersProfileDashBoard = () => {
//     const dispatch = useDispatch();
//     const { teachers } = useSelector((state) => state.teachers);

//     useEffect(() => {
//         dispatch(getTeachers());
//     }, [dispatch]);

//     const handleDelete = (id) => {
//         dispatch(deleteTeacher(id));
//     };

//     return (
//         <div>
//             <h2>Teacher Profiles</h2>
//             <ul>
//                 {teachers.map((teacher) => (
//                     <li key={teacher._id}>
//                         <h3>{teacher.firstName} {teacher.lastName}</h3>
//                         <p>Email: {teacher.email}</p>
//                         <p>Bio: {teacher.profileWriteUp}</p>
//                         <p>Work Experience: {teacher.workExperience}</p>
//                         <p>Address: {teacher.address}</p>
//                         <p>Courses: {teacher.courses.join(', ')}</p>
//                         <p>Years of Experience: {teacher.yearsOfExperience}</p>
//                         <button onClick={() => handleDelete(teacher._id)}>Delete</button>
//                         {/* Add Update button and logic here */}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TeachersProfileDashBoard;

import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers, deleteTeacher } from './TeacherRedux/TeacherActions';

const TeachersProfileDashBoard = () => {
    const dispatch = useDispatch();
    const teachers = useSelector((state) => state.teachers.teachers || []); // Default to empty array

    useEffect(() => {
        dispatch(getTeachers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteTeacher(id));
    };

    return (
        <div>
            <h2>Teacher Profiles</h2>
            <ul>
                {teachers.length > 0 ? (
                    teachers.map((teacher) => (
                        <li key={teacher._id}>
                            <h3>{teacher.firstName} {teacher.lastName}</h3>
                            <p>Email: {teacher.email}</p>
                            <p>Bio: {teacher.profileWriteUp}</p>
                            <p>Work Experience: {teacher.workExperience}</p>
                            <p>Address: {teacher.address}</p>
                            <p>Courses: {teacher.courses.join(', ')}</p>
                            <p>Years of Experience: {teacher.yearsOfExperience}</p>
                            <button onClick={() => handleDelete(teacher._id)}>Delete</button>
                            {/* Add Update button and logic here */}
                        </li>
                    ))
                ) : (
                    <p>No teachers found.</p>
                )}
            </ul>
        </div>
    );
};

export default TeachersProfileDashBoard;
