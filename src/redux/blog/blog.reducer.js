import {BlogActionTypes} from './blog.types'
const INITIAL_STATE={
    posts:[],
    postDetail:{},
    isFetching:false,
    errorMessage:null,
}
 const blogReducers=(state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case BlogActionTypes.FETCH_BLOG_ITEM_START:
            return {
                ...state,
                isFetching: true
            }
        case BlogActionTypes.FETCH_BLOG_ITEM_SUCCESS:
            return {
                ...state,
               posts: action.payload,
                isFetching: false
            }
        case BlogActionTypes.FETCH_BLOG_DETAIL_SUCCESS:
            return {
                ...state,
                postDetail: action.payload,
                isFetching: false
            }
        case BlogActionTypes.FETCH_BLOG_DETAIL_FAILURE:
        case BlogActionTypes.FETCH_BLOG_ITEM_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                isFetching: false
            }

        default:
                return{
                ...state
                }



    }
}
export default blogReducers;