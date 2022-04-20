import { combineReducers } from "redux";
import authReducer from "./authReducers";
import generalReducer from "./generalReducers";

const rootReducer = combineReducers ({
    auth: authReducer,
    general: generalReducer,
})

export default rootReducer