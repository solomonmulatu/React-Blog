import React from 'react'
import BlogHeader from "../components/blog_header.component";
import BlogDetail from "../components/blog_detail.component";
import {connect} from 'react-redux'
import {

    showBlogItemDetailStart
} from "../redux/blog/blog.actions";
import {selectBlogPostDetail} from "../redux/blog/blog.selectors";

const {useEffect} = require("react");

const Blog =({match,showBlogItemDetailStart,postDetail})=>{


    useEffect(()=>{
        showBlogItemDetailStart(match.params.blog_id)
    },[showBlogItemDetailStart])



        return (

            <div>
                <BlogHeader title={postDetail.title}/>
                <BlogDetail body={postDetail.body}/>
            </div>

        )


}

const mapStateToProps = (state) => ({
    postDetail: selectBlogPostDetail(state)
})
const mapDispatchToProps = (dispatch) => ({
    showBlogItemDetailStart: (post) => dispatch(showBlogItemDetailStart(post)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Blog);