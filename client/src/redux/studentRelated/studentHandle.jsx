import axios from 'axios';
import {
    requestStart,
    requestSuccess,
    requestFailed,
    requestError,
    addStudentSuccess
} from './studentSlice';

export const getAllStudents = (id) => async (dispatch) => {
    dispatch(requestStart());

    try {
        const result = await axios.get(`$http://localhost:4000/api/school/Students/${id}`);
        if (result.data.message) {
            dispatch(requestFailed(result.data.message));
        } else {
            dispatch(requestSuccess(result.data));
        }
    } catch (error) {
        dispatch(requestError(error));
    }
}

export const updateStudentFields = (id, fields, address) => async (dispatch) => {
    dispatch(requestStart());

    try {
        const result = await axios.put(`$http://localhost:4000/api/school/${address}/${id}`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.message) {
            dispatch(requestFailed(result.data.message));
        } else {
            dispatch(addStudentSuccess());
        }
    } catch (error) {
        dispatch(requestError(error));
    }
}

export const removeStuff = (id, address) => async (dispatch) => {
    dispatch(requestStart());

    try {
        const result = await axios.put(`$http://localhost:4000/api/school/${address}/${id}`);
        if (result.data.message) {
            dispatch(requestFailed(result.data.message));
        } else {
            dispatch(stuffDone());
        }
    } catch (error) {
        dispatch(requestError(error));
    }
}