import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../components/types/types';

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({ user }) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName))

            });

    }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(userCred => {
                console.log(userCred);
            })
    }
}
export const login = (uid, displayName) => ({

    type: types.login,
    payload: {
        uid,
        displayName

    }
})