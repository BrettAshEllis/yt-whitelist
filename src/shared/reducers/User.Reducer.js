import React from "react";
import { connect } from "react-redux";
import { SET_PARENT, CLEAR_PARENT } from "../actions";

const initialState = null;

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PARENT:
            return action.parentUsername;
        case CLEAR_PARENT:
            return null;
        default:
            return state;
    }
}


export default connect(mapDispatchToProps, mapStateToProps)(userReducer)