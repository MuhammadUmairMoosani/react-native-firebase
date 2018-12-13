import {
    SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE,
    SIGNIN, SIGNIN_SUCCESS, SIGNIN_FAILURE,
    LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE,
} from '../constants'


export default class EmailAuthActions {

    static Signup(user) {
        return {
            type: SIGNUP,
            payload: user
        }
    }

    static SignupSuccess(data) {
        return {
            type: SIGNUP_SUCCESS,
            payload: data
        }
    }

    static SignupFailure(error) {
        return {
            type: SIGNUP_FAILURE,
            error: error
        }
    }

    static Signin(user) {
        return {
            type: SIGNIN,
            payload: user
        }
    }

    static SigninSuccess(data) {
        return {
            type: SIGNIN_SUCCESS,
            payload: data
        }
    }

    static SigninFailure(error) {
        return {
            type: SIGNIN_FAILURE,
            error: error
        }
    }

    static Signout() {
        return {
            type: LOGOUT
        }
    }

    static SignoutSuccess() {
        return {
            type: LOGOUT_SUCCESS
        }
    }

    static SignoutFailure(error) {
        return {
            type: LOGOUT_FAILURE,
            error: error
        }
    }
}