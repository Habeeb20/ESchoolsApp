// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     studentsList: [],
//     loading: false,
//     error: null,
//     response: null,
//     statestatus: "idle",
// };

// const studentSlice = createSlice({
//     name: 'student',
//     initialState,
//     reducers: {
//         getRequest: (state) => {
//             state.loading = true;
//         },
//         stuffDone: (state) => {
//             state.loading = false;
//             state.error = null;
//             state.response = null;
//             state.statestatus = "added";
//         },
//         getSuccess: (state, action) => {
//             state.studentsList = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.response = null;
//         },
//         getFailed: (state, action) => {
//             state.response = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getError: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         underStudentControl: (state) => {
//             state.loading = false;
//             state.response = null;
//             state.error = null;
//             state.statestatus = "idle";
//         }
//     },
// });

// export const {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     underStudentControl,
//     stuffDone,
// } = studentSlice.actions;

// export const studentReducer = studentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    studentsList: [],
    loading: false,
    error: null,
    response: null,
    status: "idle", // Renamed from statestatus to status for simplicity
};

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        requestStart: (state) => {
            state.loading = true;
        },
        requestSuccess: (state, action) => {
            state.studentsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        requestFailed: (state, action) => {
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        requestError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        addStudentSuccess: (state) => {
            state.loading = false;
            state.error = null;
            state.response = null;
            state.status = "added";
        },
        resetStatus: (state) => {
            state.loading = false;
            state.response = null;
            state.error = null;
            state.status = "idle";
        }
    },
});

export const {
    requestStart,
    requestSuccess,
    requestFailed,
    requestError,
    addStudentSuccess,
    resetStatus,
} = studentSlice.actions;

export const studentReducer = studentSlice.reducer;
