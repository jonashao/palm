import React, { Component, PropTypes } from 'react';
import { Sidebar, Container, Checkbox } from 'semantic-ui-react';

import PostHeader from './Post.Header';
import PostMenu from './Post.Menu';
import PostContent from './Post.Content';

import _ from 'lodash';

import '../css/Post.css';

class CheckItem extends Component {
    render() {
        return (
            <div className="cha-item">
              <Checkbox label={ this.props.label } />
            </div>
            );
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

        let cl;
        if (checklist !== undefined) {
            cl = checklist.map((cha, index) => {
                return <CheckItem key={ index } id={ index } label={ cha.header } />;
            });
        }

        return (
            <Container id='print'>
              <PostHeader {...this.props}/>
              <div className="post-intro">
                <p value={ description } />
              </div>
              <div className="checkbox-list">
                { cl }
              </div>
            </Container>
            );
    }
}

class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            scrollY: '0'
        }
    }

    handleScroll = event => {
        let y = window.scrollY;
        if (y < this.state.crollY) {
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
            'leading': true
        });
        window.addEventListener('scroll', this.debounce);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.debounce);
    }

    render() {
        const {visible, heart, comment} = this.props;
        return (
            <div className="App">
              <div>
                <PostMenu visible={ visible } heart={ heart } comment={ comment } />
                <Sidebar.Pusher>
                  <Content title={ this.props.title } author={ this.props.author } date={ this.props.date } like={ this.props.like } description={ this.props.description } checklist={ this.props.checklist }
                  />
                </Sidebar.Pusher>
              </div>
            </div>
            );
    }
}

export default PostContainer;