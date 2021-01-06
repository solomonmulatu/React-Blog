import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from "./with-spinner/with-spinner.component";
import BlogList from "./blog_list.component";
const mapStateToProps = (state)=>({
    isLoading:state.blog.isFetching

});

const BlogListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(BlogList);

export default BlogListContainer;