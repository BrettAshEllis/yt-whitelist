export const SET_PARENT = "Set Parent";
export const CLEAR_PARENT = "Clear Parent";

export const setParent = (parent) => {
    return { type: SET_PARENT, parent };
}

export const clearParent = () => {
    return { type: CLEAR_PARENT };
}