import axios from 'axios';

// Action Types
export const GET_TEACHERS = 'GET_TEACHERS';
export const CREATE_TEACHER = 'CREATE_TEACHER';
export const UPDATE_TEACHER = 'UPDATE_TEACHER';
export const DELETE_TEACHER = 'DELETE_TEACHER';

// Action Creators
export const getTeachers = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:4000/api/getAllteachersProfile');
        dispatch({ type: GET_TEACHERS, payload: response.data });
    } catch (error) {
        console.error('Error fetching teachers:', error);
    }
};

export const createTeacher = (teacher) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:4000/api/createTeacherProfile', teacher);
        dispatch({ type: CREATE_TEACHER, payload: response.data });
    } catch (error) {
        console.error('Error creating teacher:', error);
    }
};

export const updateTeacher = (id, teacher) => async (dispatch) => {
    try {
        const response = await axios.put(`http://localhost:4000/api/updateTeacherProfile/${id}`, teacher);
        dispatch({ type: UPDATE_TEACHER, payload: response.data });
    } catch (error) {
        console.error('Error updating teacher:', error);
    }
};

export const deleteTeacher = (id) => async (dispatch) => {
    try {
        await axios.delete(`http://localhost:4000/api/deleteTeacherProfile/${id}`);
        dispatch({ type: DELETE_TEACHER, payload: id });
    } catch (error) {
        console.error('Error deleting teacher:', error);
    }
};
