import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Post from '../components/post/Post';
import fetchPost from '../actions/post';


class PostContainer extends Component {

    static propsType = {
        post: PropTypes.shape({
            content: PropTypes.object.isRequired,
            count: PropTypes.object.isRequired
        }).isRequired
    }

    componentDidMount() {
    }

    render() {
        return (
            <div><Post {...this.props.post}/></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}


export default connect(mapStateToProps, {fetchPost})(PostContainer);