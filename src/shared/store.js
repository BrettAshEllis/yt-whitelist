import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk"

const initialState = {
    parent: null,
    search: {
        parentSearchState: [],
        userSearchState: []
    },
    whitelist: [],
}

export default createStore(rootReducer, initialState, applyMiddleware(thunk))