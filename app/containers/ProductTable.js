import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ProductRow from '../components/ProductRow';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsError } from '../actions';
import { fetchPosts } from '../services';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPostsWithRedux();
    }

    render() {
        let rows = [];
        const posts = this.props.posts;
        if (posts) {
            posts.forEach((p, index) => {
                rows.push(
                    <ProductRow key={index} data={p} />
                );
            });
            return <div> {rows} </div>;
        }
        return <p>no posts yet</p>;
    }
}

ProductTable.propTypes = {
    posts: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array]),
    fetchPostsWithRedux: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsWithRedux: () => {
            dispatch(fetchPostsRequest());
            return fetchPosts().then((response) => {
                if (response) {
                    dispatch(fetchPostsSuccess(response));
                } else {
                    dispatch(fetchPostsError());
                }
            });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductTable);
