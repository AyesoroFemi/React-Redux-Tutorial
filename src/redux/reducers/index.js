import authReducer from "./authReducer";
import counterReducer from "./counterReducer";

import { combineReducers } from "redux";


const allReducers = combineReducers({
    authReducer: authReducer,
    counterReducer: counterReducer
})

export default allReducers;