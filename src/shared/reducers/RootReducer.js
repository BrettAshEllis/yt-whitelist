import { combineReducers } from "redux";
import { userReducer } from "./User.Reducer"
import { videosReducer } from "../Video.reducer"

const rootReducer = combineReducers({
    videosReducer,
    userReducer
});

export default rootReducer;