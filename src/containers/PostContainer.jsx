import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from '../components/Post';
import FetchPostAction from '../actions/post';

class PostContainer extends Component {
    static defaultProps = {}

    static propsType = {}

    render() {
        return (
            <div>
              <Post {...this.props.post}/>
            </div>
            );
    }
}

function mapStateToProps(state) {
    return {
        post: state.posts.post
    }
}

function mapDispatchToProps(dispatch) {
    return {
        FetchPostAction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);