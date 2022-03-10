export const ADD_WHITELIST = "Add Whitelist";
export const REMOVE_WHITELIST = "Remove Whitelist";
export const CLEAR_WHITELIST = "Clear Whitelist"



export const ADD_WHITELIST = (title) => {
    return { type: ADD_WHITELIST, title };
};

export const removeWhitelist = (id) => {
    return { type: REMOVE_WHITELIST, id };
};

export const clearWhitelist = () => {
    return { type: CLEAR_WHITELIST };
};

export const setUserSearch = (userSearch) => {
    return { type: SET_USER_SEARCH, userSearch }
};

export const clearUserSearch = () => {
    return { type: CLEAR_USER_SEARCH }
}

export const setParentSearch = (parentSearch) => {
    return { type: SET_PARENT_SEARCH, parentSearch }
}

export const clearParentSearch = () => {
    return { type: CLEAR_PARENT_SEARCH }
}