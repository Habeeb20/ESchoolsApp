import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';

import teacherReducer from './TeacherSlice';

const rootReducer = combineReducers({
    teachers: teacherReducer,
});

export const TeacherProfileStore = createStore(rootReducer, applyMiddleware(thunk));

// export default TeacherProfileStore;
