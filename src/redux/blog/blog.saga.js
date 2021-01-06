import {takeEvery,call,all,put} from 'redux-saga/effects'
import {
    showBlogItemsSuccess,
    showBlogItemsFailure,
    showBlogItemDetailSuccess,
    showBlogItemDetailFailure
} from "./blog.actions";
import {BlogActionTypes} from "./blog.types";

export function* fetchBlogAsync() {
    try{
        const response= yield  fetch('https://jsonplaceholder.typicode.com/posts');
        const actualResponse=yield response.json()
        yield put(showBlogItemsSuccess(actualResponse))
    }catch(error){
        yield put(showBlogItemsFailure(error))
    }


}
export function* fetchBlogDetailAsync(action) {
    try{
       yield console.log("++++++++"+action.payload)
        const response= yield fetch(`https://jsonplaceholder.typicode.com/posts/${action.payload}`)
        const actualResponse=yield response.json()
        yield put(showBlogItemDetailSuccess(actualResponse))

    }catch(error){
        yield put(showBlogItemDetailFailure(error))
    }


}

export function* fetchBlogStart() {
yield takeEvery(
    BlogActionTypes.FETCH_BLOG_ITEM_START,fetchBlogAsync
)
}

export function* fetchBlogDetailStart() {
    yield takeEvery(
        BlogActionTypes.FETCH_BLOG_DETAIL_START,fetchBlogDetailAsync
    )
}



export function* blogSaga() {
yield (all([call(fetchBlogStart),call(fetchBlogDetailStart)]))
}