import React from 'react'
import {Link} from "react-router-dom";
class BlogHeader extends React.Component{
    render(){
        const { title } = this.props;
        return(
        <header className="masthead" style={{backgroundImage: "url('img/post-bg.jpg')"}}>
            <div className="overlay"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="post-heading">
                            <h1>{title}</h1>
                            <span className="meta">Posted by
              <Link to="#">Solomon Mulatu</Link>
              on August 24, 2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
    }

}
export default BlogHeader;