import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants';

const initialState = {
    user: {},
    isLoggedIn: false,
    isLoading: false,
    isError: false,
    error: {},
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP:
            state = {
                ...state,
                user: {},
                isLoggedIn: false,
                isLoading: true,
                isError: false,
                error: {},
            }
            break;
        case SIGNUP_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                isLoading: false,
            }
            break;
        case SIGNUP_FAILURE:
            state = {
                ...state,
                user: {},
                isLoading: false,
                isError: true,
                error: action.error,
            }
            break;
        case SIGNIN:
            state = {
                ...state,
                user: {},
                isLoggedIn: false,
                isLoading: true,
                isError: false,
                error: {},
            }
            break;
        case SIGNIN_SUCCESS:
            state = {
                ...state,
                user: action.payload,
                isLoading: false,
                isLoggedIn: true,
            }
            break;
        case SIGNIN_FAILURE:
            state = {
                ...state,
                user: {},
                isLoading: false,
                isError: true,
                error: action.error,
            }
            break;
        case LOGOUT:
            state = {
                ...state,
                isLoading: true
            }
            break;
        case LOGOUT_SUCCESS:
            state = {
                ...state,
                authUser: {},
                user: {},
                isLoading: false,
                isError: false,
                error: {},
                isLoggedIn: false,
            }
            break;
        case LOGOUT_FAILURE:
            state = {
                ...state,
                isLoading: false,
                isError: true,
                error: action.error
            }
            break;
        default:
            break;
    }
    return state;
}