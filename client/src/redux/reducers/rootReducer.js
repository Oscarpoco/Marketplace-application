// THIS REDUCER COMBINES ALL THE REDUCERS FROM OTHER COMPONENTS BEFORE ARE BEING SENT TO THE STORE

import  { combineReducers} from 'redux';

// MY REDUCERS FROM OTHER COMPONENTS
import { userInterfaceReducer } from './userInterFaceReducer.js';

// ENDS

// COMBINED REDUCERS
const rootReducer = combineReducers({
    userInterface: userInterfaceReducer,
});
// ENDS

export default rootReducer;