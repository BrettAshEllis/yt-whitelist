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

const videosReducer = (state = false, action) => {
    switch (action.type) {
        case 'PARENT':
            return (!state);
        default:
            return (state);
    }
}


export default connect(mapDispatchToProps, mapStateToProps)(loggedInReducer)