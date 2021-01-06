import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from "./with-spinner/with-spinner.component";
import BlogDetail from "./blog_detail.component";
const mapStateToProps = (state)=>({
    isLoading:state.blog.isFetching

});

const BlogDetailContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(BlogDetail);

export default BlogDetailContainer;