import { SET_PARENT, CLEAR_PARENT } from "../actions";

const initialState = {
    parentState: [],
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PARENT:
            return action.parent;
        case CLEAR_PARENT:
            return null;
        default:
            return state;
    }
};