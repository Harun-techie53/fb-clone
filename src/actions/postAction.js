import db from "../config/firebase";
import firebase from "firebase/compat/app";
import { 
    FETCH_ALL_POST_SUCCESS,
    FECTH_ALL_POST_FAIL
} from "../constants";

export const fetchAllPosts = () => (dispatch) => {
    db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => (
        dispatch({
            type: FETCH_ALL_POST_SUCCESS,
            payload: snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
        })
      ));
}

export const addToPost = (text, user) => async (dispatch) => {
    console.log(user)
    try {
        const res = await db
            .collection("posts")
            .add({
                profilePic: user?.photoURL ?? "",
                userId: user?.userId ? user?.userId : user?.uid,
                username: user?.displayName ? user.displayName : user?.fullName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                text: text ?? "",
                likes: [],
                bookmarks: []
            });
    } catch (err) {
        console.log(err);
    }
}

export const addedToLikedPost = (userId, postId) => async (dispatch) => {
    db
        .collection("posts")
        .doc(postId)
        .update({
            likes: firebase.firestore.FieldValue.arrayUnion(userId)
        })
        .catch((err) => console.log(err));
}

export const addedToBookmarkedPost = (userId, postId) => async (dispatch) => {
    db
        .collection("posts")
        .doc(postId)
        .update({
            bookmarks: firebase.firestore.FieldValue.arrayUnion(userId)
        })
        .catch((err) => console.log(err));
}

export const removeFromLikedPost = (userId, postId) => async (dispatch) => {
    db
        .collection("posts")
        .doc(postId)
        .update({
            likes: firebase.firestore.FieldValue.arrayRemove(userId)
        })
        .catch((err) => console.log(err));
}

export const removeFromBookmarkedPost = (userId, postId) => async (dispatch) => {
    db
        .collection("posts")
        .doc(postId)
        .update({
            bookmarks: firebase.firestore.FieldValue.arrayRemove(userId)
        })
        .catch((err) => console.log(err));
}

export const removePostById = (postId) => (dispatch) => {
    db.collection("posts").doc(postId).delete();
}

export const updatePostById = (postId, text) => (dispatch) => {
    db
        .collection("posts")
        .doc(postId)
        .update({
            text
        });
}