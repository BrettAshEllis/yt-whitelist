import React from "react";
import { connect } from "react-redux";
import {
    WHITELIST_CREATOR,
    REMOVE_WHITELIST,
    CLEAR_WHITELIST,
    SET_USER_SEARCH,
    CLEAR_USER_SEARCH,
    SET_PARENT_SEARCH,
    CLEAR_PARENT_SEARCH
} from "../actions/Video.actions";

const initialState = {
    whitelist: [],
    parentSearchState: [],
    userSearchState: [],
}

export default function videosReducer(state = initialState, action) {
    switch (action.type) {
        case WHITELIST_CREATOR:
            return { ...state, whitelist: action.channelID };
        case REMOVE_WHITELIST:
            return { ...state, whitelist: state.whitelist.filter((val) => val.creator !== action.creator), };
        case CLEAR_WHITELIST:
            return { ...state, whitelist: [] };
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
};