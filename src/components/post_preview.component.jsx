import {Link} from "react-router-dom";

const PostPreview=({title,detail,postid})=>{
    return(

        <div className="post-preview">

            <Link to={"/blog/"+postid}>
                <h2 className="post-title">
                    {title}
                </h2>
                <h3 className="post-subtitle">
                    {detail}
                </h3>
            </Link>
            <p className="post-meta">Posted by
                <Link to='#'>Start Bootstrap</Link>
                on September 24, 2019</p>
            <hr></hr>

        </div>

    )
}
export default PostPreview;