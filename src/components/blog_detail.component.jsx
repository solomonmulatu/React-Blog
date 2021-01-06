const BlogDetail=({body})=>{
    return(
        <article>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
<p>{body}</p>

                        <p>Placeholder text by
                            <a href="http://spaceipsum.com/">Space Ipsum</a>. Photographs by
                            <a href="https://www.flickr.com/photos/nasacommons/">NASA on The Commons</a>.</p>
                    </div>
                </div>
            </div>
            <hr/>

        </article>


    )
}
export default BlogDetail;