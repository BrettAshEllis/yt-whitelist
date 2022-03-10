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