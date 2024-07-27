// import { GET_TEACHERS, CREATE_TEACHER, UPDATE_TEACHER, DELETE_TEACHER } from './TeacherActions';

// const initialState = {
//     teachers: [],
//     loading: false,
//     error: null,
// };

// const teachersSlice = (state = initialState, action) => {

//     switch (action.type) {
//         case GET_TEACHERS:
//             return { ...state, teachers: action.payload };
//         case CREATE_TEACHER:
//             return { ...state, teachers: [...state.teachers, action.payload] };
//         case UPDATE_TEACHER:
//             return {
//                 ...state,
//                 teachers: state.teachers.map((teacher) =>
//                     teacher._id === action.payload._id ? action.payload : teacher
//                 ),
//             };
//         case DELETE_TEACHER:
//             return {
//                 ...state,
//                 teachers: state.teachers.filter((teacher) => teacher._id !== action.payload),
//             };
//         default:
//             return state;
//     }
// };

// export default teachersSlice.Reducer;


// src/redux/teacherRelated/teacherSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define the initial state
const initialState = {
    teachers: [],
    loading: false,
    error: null,
};

// Create a slice of the store
const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        getTeachers: (state, action) => {
            state.teachers = action.payload;
        },
        createTeacher: (state, action) => {
            state.teachers.push(action.payload);
        },
        updateTeacher: (state, action) => {
            state.teachers = state.teachers.map((teacher) =>
                teacher._id === action.payload._id ? action.payload : teacher
            );
        },
        deleteTeacher: (state, action) => {
            state.teachers = state.teachers.filter((teacher) => teacher._id !== action.payload);
        },
    },
});

// Export actions
export const { getTeachers, createTeacher, updateTeacher, deleteTeacher } = teachersSlice.actions;

// Export reducer
export default teachersSlice.reducer;
