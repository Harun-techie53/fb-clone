import {
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    GOOGLE_SIGN_OUT_SUCCESS,
    GOOGLE_SIGN_OUT_FAIL,
    SIGN_UP_SUCCESS,
    SIGN_IN_SUCCESS,
    GET_USER_INFO
} from "../constants";

const initialState = {
    isLoading: true,
    isSignedIn: null
}

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case GOOGLE_AUTH_SUCCESS:
        case SIGN_UP_SUCCESS:
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user,
                isSignedIn: true
            }
        case GOOGLE_AUTH_FAIL:
        case GOOGLE_SIGN_OUT_FAIL:
            return {
                ...state,
                isLoading: false,
                user: null,
                isSignedIn: false,
                error: action.payload.error
            }
        case GOOGLE_SIGN_OUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: null,
                isSignedIn: null,
                userInfo: null
            }
        case GET_USER_INFO:
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload.user
            }
        default: 
            return state;
    }
}

export default authReducer;