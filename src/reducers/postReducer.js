import { FETCH_ALL_POST_SUCCESS } from "../constants"

const initialState = {
    isLoading: true
}

const postReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_ALL_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                allPosts: action.payload
            }
        default:
            return state;
    }
}

export default postReducer;