export const SET_PARENT = "Set Parent";
export const CLEAR_PARENT = "Clear Parent";

export const setParent = (parentUsername) => {
    return { type: SET_PARENT, parentUsername };
}

export const clearParent = () => {
    return { type: CLEAR_PARENT };
}