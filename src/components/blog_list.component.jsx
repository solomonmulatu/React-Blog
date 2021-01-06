import React from 'react'
import PostPreview from "./post_preview.component";
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {selectBlogPosts} from "../redux/blog/blog.selectors";

class BlogList extends React.Component{



    render() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                    {
                        this.props.incomingPost.slice(0,10).map((post)=>
                            <PostPreview key={post.id} title={post.title} detail={post.body} postid={post.id}/>
                        )
                    }


                    <div className="clearfix">
                        <Link className="btn btn-primary float-right" to="#">Older Posts &rarr;</Link>
                    </div>
                </div>
            </div>

        </div>

    )
    }
}

const mapStateToProps=state=>({
    incomingPost:selectBlogPosts(state)
})
export default connect(mapStateToProps)(BlogList);