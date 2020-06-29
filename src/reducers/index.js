import hobbyReducer from "./hobby";
import { combineReducers } from  "redux"
import userReducer from "./user";

const  rootReducer = combineReducers({
    hobby: hobbyReducer,
    user: userReducer,
});

export default rootReducer;