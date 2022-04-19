import { auth, provider } from "../config/firebase";
import db from "../config/firebase";
import {
    GOOGLE_AUTH_SUCCESS,
    GOOGLE_AUTH_FAIL,
    GOOGLE_SIGN_OUT_SUCCESS,
    GOOGLE_SIGN_OUT_FAIL,
    SIGN_UP_SUCCESS,
    SIGN_IN_SUCCESS,
    GET_USER_INFO
} from "../constants";

export const signUpWithGoogle = () => async (dispatch) => {
    try {
        const res = await auth.signInWithPopup(provider);

        dispatch({
            type: GOOGLE_AUTH_SUCCESS,
            payload: {
                user: res.user
            }
        });
    } catch (err) {
        dispatch({
            type: GOOGLE_AUTH_FAIL,
            payload: {
                error: err
            }
        })
    }
}

export const signOutWithGoogle = () => async (dispatch) => {
    try {
        await auth.signOut();
        dispatch({
            type: GOOGLE_SIGN_OUT_SUCCESS
        });
    } catch (err) {
        dispatch({
            type: GOOGLE_SIGN_OUT_FAIL,
            payload: {
                error: err
            }
        })
    }
}

export const signUpForm = ({
    githubUserName,
    fullName,
    phoneNum,
    email,
    password
}) => async (dispatch) => {
    try {

        const cred = await auth.createUserWithEmailAndPassword(email, password);
        const res = await db
            .collection("users")
            .doc(cred.user.uid)
            .set({
                githubUserName,
                fullName,
                phoneNumber: phoneNum,
                email
            });
        dispatch({
            type: SIGN_UP_SUCCESS,
            payload: {
                user: cred.user
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAuthUserInfo = (userId) => async (dispatch) => {
    try {
        const user = await db.collection("users").doc(userId).get();

        dispatch({
            type: GET_USER_INFO,
            payload: {
                user: {
                    ...user.data(),
                    userId
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
}

export const signInForm = ({ email, password }) => async (dispatch) => {
    try {
        const cred = await auth.signInWithEmailAndPassword(email, password);

        dispatch({
            type: SIGN_IN_SUCCESS,
            payload: {
                user: cred.user
            }
        });

        dispatch(getAuthUserInfo(cred.user.uid));
    } catch (error) {
        console.log(error);
    }
}