import {BlogActionTypes} from "./blog.types";

export const showBlogItemsStart=()=>({
    type: BlogActionTypes.FETCH_BLOG_ITEM_START,
})
export const showBlogItemsSuccess=(blogs)=>({
    type: BlogActionTypes.FETCH_BLOG_ITEM_SUCCESS,
    payload:blogs
})
export const showBlogItemsFailure=(error)=>({
    type: BlogActionTypes.FETCH_BLOG_ITEM_FAILURE,
    payload:error
})
//this is redux thunk code
export const fetchBlogItemStartAsync=()=>{
    return dispatch=>{
        dispatch(showBlogItemsStart())
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json =>dispatch(showBlogItemsSuccess(json))).catch((error)=>{
            dispatch(showBlogItemsFailure(error))
        })
    }
}
//this is redux thunk code
export const fetchBlogDetailStartAsync=(blogId)=>{
    return dispatch=>{
        dispatch(showBlogItemDetailStart())
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
            .then(response => response.json())
            .then(json => dispatch(showBlogItemDetailSuccess(json))
            ).catch((error) => dispatch(showBlogItemDetailFailure(error))
        )
    }
}

export const showBlogItemDetailStart=(blogId)=>({
    type: BlogActionTypes.FETCH_BLOG_DETAIL_START,
    payload:blogId
})
export const showBlogItemDetailSuccess=(blogs)=>({
    type: BlogActionTypes.FETCH_BLOG_DETAIL_SUCCESS,
    payload:blogs
})
export const showBlogItemDetailFailure=(error)=>({
    type: BlogActionTypes.FETCH_BLOG_DETAIL_FAILURE,
    payload:error
})