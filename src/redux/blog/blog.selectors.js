import {createSelector} from 'reselect'
const selectBlog=state=>state.blog

export const selectBlogPosts=createSelector(
    [selectBlog],
    blog=>blog.posts

)
export const selectBlogPostDetail=createSelector(
    [selectBlog],
    blog=>blog.postDetail

)
