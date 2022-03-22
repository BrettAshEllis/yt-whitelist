import { combineReducers } from "redux";
import { userReducer } from "./User.Reducer"
import { whitelistReducer } from "./Whitelist.reducer"
import { searchReducer } from "./Search.Reducer"

const rootReducer = combineReducers({
    whitelisted: whitelistReducer,
    parent: userReducer,
    search: searchReducer
});

export default rootReducer;