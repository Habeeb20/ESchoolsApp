// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     sclassesList: [],
//     sclassStudents: [],
//     sclassDetails: [],
//     subjectsList: [],
//     subjectDetails: [],
//     loading: false,
//     subloading: false,
//     error: null,
//     response: null,
//     getresponse: null,
// };

// const sclassSlice = createSlice({
//     name: 'sclass',
//     initialState,
//     reducers: {
//         getRequest: (state) => {
//             state.loading = true;
//         },
//         getSubDetailsRequest: (state) => {
//             state.subloading = true;
//         },
//         getSuccess: (state, action) => {
//             state.sclassesList = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.getresponse = null;
//         },
//         getStudentsSuccess: (state, action) => {
//             state.sclassStudents = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.getresponse = null;
//         },
//         getSubjectsSuccess: (state, action) => {
//             state.subjectsList = action.payload;
//             state.loading = false;
//             state.error = null;
//             state.response = null;
//         },
//         getFailed: (state, action) => {
//             state.subjectsList = [];
//             state.response = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getFailedTwo: (state, action) => {
//             state.sclassesList = [];
//             state.sclassStudents = [];
//             state.getresponse = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getError: (state, action) => {
//             state.loading = false;
//             state.error = action.payload;
//         },
//         detailsSuccess: (state, action) => {
//             state.sclassDetails = action.payload;
//             state.loading = false;
//             state.error = null;
//         },
//         getSubDetailsSuccess: (state, action) => {
//             state.subjectDetails = action.payload;
//             state.subloading = false;
//             state.error = null;
//         },
//         resetSubjects: (state) => {
//             state.subjectsList = [];
//             state.sclassesList = [];
//         },
//     },
// });

// export const {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     getStudentsSuccess,
//     getSubjectsSuccess,
//     detailsSuccess,
//     getFailedTwo,
//     resetSubjects,
//     getSubDetailsSuccess,
//     getSubDetailsRequest
// } = sclassSlice.actions;

// export const sclassReducer = sclassSlice.reducer;


// const initialState = {
//     sclassesList: [],
//     loading: false,
//     error: null,
//     getresponse: false
// };

// const sclassReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'GET_SCLASSES_REQUEST':
//             return { ...state, loading: true };
//         case 'GET_SCLASSES_SUCCESS':
//             return { ...state, loading: false, sclassesList: action.payload, getresponse: true };
//         case 'GET_SCLASSES_FAILURE':
//             return { ...state, loading: false, error: action.payload };
//         default:
//             return state;
//     }
// };

// export default sclassReducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     sclassesList: [],
//     sclassStudents: [],
//     sclassDetails: [],
//     subjectsList: [],
//     subjectDetails: [],
//     loading: false,
//     subloading: false,
//     error: null,
//     response: null,
//     getresponse: null,
// };

// const sclassSlice = createSlice({
//     name: 'sclass',
//     initialState,
//     reducers: {
//         getRequest: (state) => {
//             state.loading = true;
//             state.error = null;
//         },
//         getSubDetailsRequest: (state) => {
//             state.subloading = true;
//             state.error = null;
//         },
//         getSuccess: (state, action) => {
//             state.sclassesList = action.payload;
//             state.loading = false;
//         },
//         getStudentsSuccess: (state, action) => {
//             state.sclassStudents = action.payload;
//             state.loading = false;
//         },
//         getSubjectsSuccess: (state, action) => {
//             state.subjectsList = action.payload;
//             state.loading = false;
//         },
//         getFailed: (state, action) => {
//             state.subjectsList = [];
//             state.response = action.payload;
//             state.loading = false;
//         },
//         getFailedTwo: (state, action) => {
//             state.sclassesList = [];
//             state.sclassStudents = [];
//             state.getresponse = action.payload;
//             state.loading = false;
//         },
//         getError: (state, action) => {
//             state.loading = false;
//             state.subloading = false;
//             state.error = action.payload;
//         },
//         detailsSuccess: (state, action) => {
//             state.sclassDetails = action.payload;
//             state.loading = false;
//         },
//         getSubDetailsSuccess: (state, action) => {
//             state.subjectDetails = action.payload;
//             state.subloading = false;
//         },
//         resetSubjects: (state) => {
//             state.subjectsList = [];
//             state.sclassesList = [];
//         },
//     },
// });

// export const {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     getStudentsSuccess,
//     getSubjectsSuccess,
//     detailsSuccess,
//     getFailedTwo,
//     resetSubjects,
//     getSubDetailsSuccess,
//     getSubDetailsRequest
// } = sclassSlice.actions;

// export const sclassReducer = sclassSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sclassesList: [],
    sclassStudents: [],
    sclassDetails: [],
    subjectsList: [],
    subjectDetails: [],
    loading: false,
    subloading: false,
    error: null,
    response: null,
    getresponse: null,
};

const sclassSlice = createSlice({
    name: 'sclass',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSubDetailsRequest: (state) => {
            state.subloading = true;
        },
        getSuccess: (state, action) => {
            state.sclassesList = action.payload;
            state.loading = false;
            state.error = null;
            state.getresponse = null;
        },
        getStudentsSuccess: (state, action) => {
            state.sclassStudents = action.payload;
            state.loading = false;
            state.error = null;
            state.getresponse = null;
        },
        getSubjectsSuccess: (state, action) => {
            state.subjectsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.subjectsList = [];
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getFailedTwo: (state, action) => {
            state.sclassesList = [];
            state.sclassStudents = [];
            state.getresponse = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        detailsSuccess: (state, action) => {
            state.sclassDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        getSubDetailsSuccess: (state, action) => {
            state.subjectDetails = action.payload;
            state.subloading = false;
            state.error = null;
        },
        resetSubjects: (state) => {
            state.subjectsList = [];
            state.sclassesList = [];
        },
    },
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    getStudentsSuccess,
    getSubjectsSuccess,
    detailsSuccess,
    getFailedTwo,
    resetSubjects,
    getSubDetailsSuccess,
    getSubDetailsRequest
} = sclassSlice.actions;

export const sclassReducer = sclassSlice.reducer;