// export const SET_USER_SEARCH = "Set User Search"
// export const CLEAR_USER_SEARCH = "Clear User Search"
export const SET_SEARCH = "Set Search"
export const CLEAR_SEARCH = "Clear Search"


// export const setUserSearch = (userSearch) => {
//     return { type: SET_USER_SEARCH, userSearch }
// };

// export const clearUserSearch = () => {
//     return { type: CLEAR_USER_SEARCH }
// };

export const setSearch = (search) => {
    return { type: SET_SEARCH, search }
};

export const clearSearch = () => {
    return { type: CLEAR_SEARCH }
};

