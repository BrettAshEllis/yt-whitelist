export const WHITELIST_CREATOR = "Whitelist Creator";
export const REMOVE_WHITELIST = "Remove Whitelist";
export const CLEAR_WHITELIST = "Clear Whitelist"
export const SET_USER_SEARCH = "Set User Search"
export const CLEAR_USER_SEARCH = "Clear User Search"
export const SET_PARENT_SEARCH = "Set Parent Search"
export const CLEAR_PARENT_SEARCH = "Clear Parent Search"


export const whitelistCreator = (channelID) => {
    return { type: WHITELIST_CREATOR, channelID };
};

export const removeWhitelist = (creator) => {
    return { type: REMOVE_WHITELIST, creator };
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