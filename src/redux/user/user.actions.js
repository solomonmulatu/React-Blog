import {UserActionTypes} from './user.types'
import {auth, firestore} from "../../firebase/firebase";

export const createUserStart = (userCredential) => ({
    type: UserActionTypes.CREATE_USER_START,
    payload: userCredential
})
export const createUserSuccess = (user) => ({
    type: UserActionTypes.CREATE_USER_SUCCESS,
    payload: user
})
export const createUserFailure = (error) => ({
    type: UserActionTypes.CREATE_USER_FAILURE,
    payload: error
})
//this is redux thunk code
export const userRegisterAsync=(name,email,message)=>{
    return dispatch=>{
        auth.createUserWithEmailAndPassword(email, "password1").then((user) => {
            console.log("Document written with ID: ", user);
            firestore.collection('users').add({
                name: name,
                email: email,
                message: message
            }).then((docRef) => {

                alert("User Successfully Registered")
                dispatch(createUserSuccess(user))
            })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                    alert(error.message)
                    dispatch(createUserFailure(error))

                });


        }).catch(function (error) {

            alert(error.message)
            dispatch(createUserFailure(error))

        })
    }


}