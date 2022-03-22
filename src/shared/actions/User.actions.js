export const SET_PARENT = "Set Parent";
export const CLEAR_PARENT = "Clear Parent";

export const setParent = (parentUsername) => {
    return { type: SET_PARENT, parent: parentUsername };
};

export const clearParent = () => {
    return { type: CLEAR_PARENT };
};