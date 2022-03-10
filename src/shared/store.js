import { createStore } from "redux";
import rootReducer from "./reducers/RootReducer";

const initialState = {
    parent: null,
    search: {
        parentSearchState: [],
        userSearchState: []
    },
    whitelist: [],
}

export default createStore(rootReducer, initialState)