import {
    SET_PARENT_SEARCH,
    CLEAR_PARENT_SEARCH,
    SET_USER_SEARCH,
    CLEAR_USER_SEARCH,

} from "../actions/Search.actions";

const initialState = {
    search: {
        parentSearchState: [],
        userSearchState: [],
    }

}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PARENT_SEARCH:
            return { ...state, parentSearchState: action.parentSearch };
        case CLEAR_PARENT_SEARCH:
            return { ...state, parentSearchState: [] };
        case SET_USER_SEARCH:
            return { ...state, userSearchState: action.userSearch };
        case CLEAR_USER_SEARCH:
            return { ...state, userSearchState: [] };

        default:
            return state;
    }
}