import {takeEvery, call, put, all} from 'redux-saga/effects'
import {createUserSuccess, createUserFailure} from "./user.actions";
import {auth, firestore} from "../../firebase/firebase";
import {UserActionTypes} from "./user.types";

export function* userRegisterAsync({payload: {email, name, message}}) {
    try {
        const user = yield auth.createUserWithEmailAndPassword(email, "password1");

            yield firestore.collection('users').add({
                name: name,
                email: email,
                message: message
            })
            alert("User Successfully Registered")
            yield put(createUserSuccess(user))



    } catch (error) {

       yield alert(error.message)
        yield put(createUserFailure(error))

    }


}
export function* userRegisterStart() {
    yield takeEvery(
        UserActionTypes.CREATE_USER_START,userRegisterAsync
    )
}

export function* userSaga() {
    yield (all([call(userRegisterStart)]))
}