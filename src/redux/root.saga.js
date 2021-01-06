import {all,call} from 'redux-saga/effects'
import {blogSaga} from "./blog/blog.saga";
import {userSaga} from "./user/user.saga";

export default function* rootSaga(){
    yield all([call(blogSaga),call(userSaga)]);
}