import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'


import AV from 'leancloud-storage';
import _ from 'lodash';

import { LOAD_POST_DETAIL } from '../constants/ActionTypes'

import DEFAULT_POST from '../assets/post.default'

const initialState = [
    DEFAULT_POST
]

const handleFetchPost = () => {
    var query = new AV.Query('Post');
    query.select(['title', 'postId', 'author', 'updatedAt', 'description', 'checklist', 'comment', 'heart', 'like']);
    query.equalTo('postId', this.props.params.postId);

    query.find().then(function(results) {
        if (results.length === 1) {
            let post = results[0];
            console.log(post);
            document.title = post.get('title') + ' - Palm';
            return {
                title: post.get('title'),
                author: post.get('author'),
                date: post.get('updatedAt').toLocaleDateString(),
                description: post.get('description'),
                checklist: post.get('checklist'),
                comment: post.get('comment'),
                heart: post.get('heart'),
                like: post.get('like')
            };
        } else {
            browserHistory.push('/404');
        }
    }, function(error) {
        browserHistory.push('/404');
    });
}


export default function posts(state = initialState, action) {
    switch (action.type) {
        case LOAD_POST_DETAIL:
            return


        default:
            return state
    }
}
