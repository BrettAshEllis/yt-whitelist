import axios from "axios";

export const ADD_WHITELIST = "Add Whitelist";
export const REMOVE_WHITELIST = "Remove Whitelist";
export const CLEAR_WHITELIST = "Clear Whitelist"
export const FETCH_CHANNEL_REQUEST = "Fetch Channel Request"
export const FETCH_CHANNEL_SUCCESS = "Fetch Channel Success"
export const FETCH_CHANNEL_FAILURE = "Fetch Channel Failure"


export const ADD_WHITELIST = (title) => {
    return { type: ADD_WHITELIST, title };
};

export const removeWhitelist = (id) => {
    return { type: REMOVE_WHITELIST, id };
};

export const clearWhitelist = () => {
    return { type: CLEAR_WHITELIST };
};

export const fetchChannelRequest = () => {
    return { type: FETCH_CHANNEL_REQUEST }
};

export const fetchChannelSuccess = (channel) => {
    return { type: FETCH_CHANNEL_SUCCESS, channel }
};

export const fetchChannelFailure = (error) => {
    return { type: FETCH_CHANNEL_FAILURE, error }
};

export const fetchChannels = () => {
    return (dispatch) => {
        dispatch(fetchChannelRequest)
        axios.get(`https://www.googleapis.com/youtube/v3/channels`)
            .then(response => {
                const channel = response.data
                dispatch(fetchChannelSuccess(channel))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchChannelFailure(err))
            })
    }
}