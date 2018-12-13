import { AuthActions } from '../actions'
import Firebase from "react-native-firebase";


export default class EmailAuthMiddleware {

    static SignUp(payload) {
        return (dispatch) => {
            dispatch(AuthActions.Signup(payload))
            // HttpService.post(Path.SIGNUP, payload)
            Firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then((user) => {
                    dispatch(AuthActions.SignupSuccess(user));
                })
                .catch((err) => {
                    dispatch(AuthActions.SignupFailure(err));
                })
        }
    }

    static SignIn(payload) {
        return (dispatch) => {
            dispatch(AuthActions.Signin(payload))
            Firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then((response) => {
                dispatch(AuthActions.SigninSuccess(response))
            }).catch((err) => {
                dispatch(AuthActions.SigninFailure(err));
            }
            )
        }
    }

    static SignOut(payload) {
        return (dispatch) => {
            dispatch(AuthActions.Signout(payload))
            HttpService.post(Path.LOGIN, payload).then((response) => {
                dispatch(AuthActions.SignoutSuccess(response))
            }).catch((err) => {
                dispatch(AuthActions.SignoutFailure(err));
            }
            )
        }
    }

}