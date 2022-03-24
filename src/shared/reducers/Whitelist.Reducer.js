import {
    ADD_WHITELIST,
    REMOVE_WHITELIST,
    CLEAR_WHITELIST,
    FETCH_CHANNEL_REQUEST,
    FETCH_CHANNEL_SUCCESS,
    FETCH_CHANNEL_FAILURE,
} from "../actions/Whitelist.actions";

const initialState = {
    whitelist: [],
    apiCall: {
        loading: false,
        channel: [],
        error: "",
    }
}

export default function whitelistReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_WHITELIST:
            return { ...state, whitelist: [...state.whitelist, { title: action.title, description: action.description, id: action.id, }] };
        case REMOVE_WHITELIST:
            return { ...state, whitelist: state.whitelist.filter((val) => val.id !== action.id), };
        case CLEAR_WHITELIST:
            return { ...state, whitelist: [] };
        case FETCH_CHANNEL_REQUEST:
            return { ...state, loading: true };
        case FETCH_CHANNEL_SUCCESS:
            return { ...state, loading: false, channel: action.payload, error: "" };
        case FETCH_CHANNEL_FAILURE:
            return { ...state, loading: false, channel: [], error: action.payload }
        default:
            return state;
    }
};