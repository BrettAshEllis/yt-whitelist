import { createStore } from "redux";
import rootReducer from "./reducers/RootReducer";

const initialState = {
    parent: null,
    videos: {
        whitelist: [],
        parentSearchState: [],
        userSearchState: [],
    }
}

export default createStore(rootReducer, initialState)