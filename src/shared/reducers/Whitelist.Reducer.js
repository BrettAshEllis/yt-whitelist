import React from "react";
import { connect } from "react-redux";
import {
    ADD_WHITELIST,
    REMOVE_WHITELIST,
    CLEAR_WHITELIST,
    SET_USER_SEARCH,
    CLEAR_USER_SEARCH,
    SET_PARENT_SEARCH,
    CLEAR_PARENT_SEARCH
} from "../actions/Whitelist.actions";

const initialState = {
    whitelist: [],
    parentSearchState: [],
    userSearchState: [],
}

export default function whitelistReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_WHITELIST:
            return { ...state, whitelist: [...state.whitelist, { title: action.title, description: items.snippet.description, id: items.id, }] };
        case REMOVE_WHITELIST:
            return { ...state, whitelist: state.whitelist.filter((val) => val.id !== action.id), };
        case CLEAR_WHITELIST:
            return { ...state, whitelist: [] };

        default:
            return state;
    }
};