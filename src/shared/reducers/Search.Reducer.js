import {
    SET_SEARCH,
    CLEAR_SEARCH,
    // SET_USER_SEARCH,
    // CLEAR_USER_SEARCH,

} from "../actions/Search.actions";

const initialState = {
    search: []
}

export default function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SEARCH:
            return { ...state, search: action.search };
        case CLEAR_SEARCH:
            return { ...state, search: [] };
        // case SET_USER_SEARCH:
        //     return { ...state, userSearchState: action.userSearch };
        // case CLEAR_USER_SEARCH:
        //     return { ...state, userSearchState: [] };

        default:
            return state;
    }
}