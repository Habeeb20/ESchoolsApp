import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  noticesList: [],
  loading: false,
  error: null,
  response: null,
};

const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true;
      state.error = null; // Reset error on new request
      state.response = null; // Reset response on new request
    },
    getSuccess: (state, action) => {
      state.noticesList = action.payload;
      state.loading = false;
    },
    getFailed: (state, action) => {
      state.response = action.payload; // Assuming response is serializable
      state.loading = false;
      state.error = null;
    },
    getError: (state, action) => {
      state.loading = false;
      state.error = action.payload; // Store only the serializable error message
    },
  },
});

export const {
  getRequest,
  getSuccess,
  getFailed,
  getError
} = noticeSlice.actions;

export const fetchNotices = (userId) => async (dispatch) => {
  dispatch(getRequest());
  try {
    const response = await axios.get(`/api/notices/${userId}`);
    dispatch(getSuccess(response.data));
  } catch (error) {
    dispatch(getError({
      message: error.message,
      name: error.name,
      code: error.code,
      stack: error.stack
    })); // Pass only serializable properties
  }
};

export const noticeReducer = noticeSlice.reducer;
