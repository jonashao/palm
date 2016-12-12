import React, { Component, PropTypes } from 'react';
import { Sidebar, Icon, Container, Checkbox, Image } from 'semantic-ui-react';
import { browserHistory } from 'react-router'

import PostHeader from './Post.Header';
import PostMenu from './Post.Menu';
import PostContent from './Post.Content';

import AV from 'leancloud-storage';
import _ from 'lodash';

import 'semantic-ui-css/semantic.min.css';
import '../css/Post.css';

class CheckItem extends Component {
    render() {
        return (
            <div className="cha-item">
              <Checkbox label={ this.props.label } />
            </div>);
    }
}


class Content extends Component {
    static defaultProps = {
        like: false
    }

    static propsType = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        like: PropTypes.bool,
        description: PropTypes.string,
        checklist: PropTypes.array.isRequired
    }

    render() {
        const {description, checklist} = this.props;

        let cl = checklist.map((cha, index) => {
            return <CheckItem key={ index } id={ index } label={ cha.header } />;
        });

        return (<Container id='print'>
                  <PostHeader {...this.props}/>
                  <div className="post-intro">
                    <p value={ description } />
                  </div>
                  <div className="checkbox-list">
                    { cl }
                  </div>
                </Container>);
    }
}

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "title",
            author: "author",
            date: "date",
            description: 'description',
            visible: false,
            checklist: [],
            like: false,
            comment: '0',
            heart: '0',
            scrollY: '0'
        }
    }


    fetchData() {
        let _this = this;
        var query = new AV.Query('Post');
        query.select(['title', 'postId', 'author', 'updatedAt', 'description', 'checklist', 'comment', 'heart', 'like']);
        query.equalTo('postId', this.props.params.postId);
        query.find().then(function(results) {
            if (results.length === 1) {
                let post = results[0];
                _this.setState({
                    title: post.get('title'),
                    author: post.get('author'),
                    date: post.get('updatedAt').toLocaleDateString(),
                    description: post.get('description'),
                    checklist: post.get('checklist'),
                    comment: post.get('comment'),
                    heart: post.get('heart'),
                    like: post.get('like')
                });
                document.title = _this.state.title + ' - Palm';
            } else {
                browserHistory.push('/404');
            }
        }, function(error) {
            browserHistory.push('/404');
        });
    }



    handleScroll = event => {
        let y = window.scrollY;
        if (y < this.state.scrollY) {
            // scroll up
            this.toggleVisibility(true);
        } else {
            this.toggleVisibility(false);
        }
        this.state.scrollY = y;
    }

    toggleVisibility = (visibility) => this.setState({
        visible: visibility
    })

    componentDidMount() {
        this.debounce = _.debounce(this.handleScroll, 100, {
            'leading': true,
        });
        window.addEventListener('scroll', this.debounce);
        this.fetchData();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.debounce);
    }

    render() {
        const {visible, heart, comment} = this.state;

        return (
            <div className="App">
              <div>
                <PostMenu visible={ visible } heart={ heart } comment={ comment } />
                <Sidebar.Pusher>
                  <Content title={ this.state.title } author={ this.state.author } date={ this.state.date } like={ this.state.like } description={ this.state.description } checklist={ this.state.checklist }
                  />
                </Sidebar.Pusher>
              </div>
            </div>
            );
    }
}

export default Post;