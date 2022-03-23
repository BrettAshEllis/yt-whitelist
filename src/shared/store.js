import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/RootReducer";
import thunk from "redux-thunk"

const initialState = {
    parent: null,
    search: [],
    whitelist: [],
}

export default createStore(rootReducer, initialState, applyMiddleware(thunk))