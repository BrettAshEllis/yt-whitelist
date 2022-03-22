export const SET_PARENT = "Set Parent";
export const CLEAR_PARENT = "Clear Parent";

export const setParent = (username) => {
    return { type: SET_PARENT, parent: username };
};

export const clearParent = () => {
    return { type: CLEAR_PARENT };
};