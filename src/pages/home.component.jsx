import React from 'react'
import BlogListContainer from "../components/blog_list_container.component";
import Header from "../components/home_header.component";
import {connect} from 'react-redux'
import {showBlogItemsStart} from "../redux/blog/blog.actions";

const {useEffect} = require("react");

const Home=({showBlogItemsStart,HomeData})=>{
   useEffect(()=>{
       showBlogItemsStart()
   },[showBlogItemsStart])


        return(
            <div>
                <Header HomeData={HomeData}/>
                <BlogListContainer/>

            </div>

        )




}
const mapDispatchToProps=dispatch=>({
    showBlogItemsStart:()=>dispatch(showBlogItemsStart()),

})

export default connect(null,mapDispatchToProps) (Home);
