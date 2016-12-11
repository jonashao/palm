import React, { Component } from 'react';
import { Sidebar, Menu, Icon, Container, Checkbox, Image } from 'semantic-ui-react'
import { browserHistory } from 'react-router'

import AV from 'leancloud-storage';
import _ from 'lodash';

import 'semantic-ui-css/semantic.min.css';
import logo from '../assets/images/logo.png';
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

    render() {
        var _checklist = [];
        this.props.checklist.forEach((cha, index) => {
            var chaItem = <CheckItem key={ index } id={ index } label={ cha.header } />;
            _checklist.push(chaItem);
        });
        return (<Container id='section-to-print'>
                  <div className="cha-container">
                    <div className="post-information">
                      <h1>{ this.props.title }</h1>
                      <div className="secondaryText">
                        <span style={ { marginRight: '.5rem' } }>{ this.props.author }</span> ·
                        <span style={ { marginLeft: '.5rem' } }>{ this.props.date }</span>
                        <span className="section-not-to-print" style={ { marginLeft: '1rem' } }>{ this.props.like }</span>
                        <span className="section-not-to-print" style={ { marginLeft: '.5rem' } }><Icon link name='print'  onClick={ window.print }/></span>
                        <span className="section-not-to-print" style={ { marginLeft: '.5rem' } }><Icon link name='hand lizard' /></span>
                      </div>
                    </div>
                    <div className="post-intro">
                      <p>
                        { this.props.description }
                      </p>
                    </div>
                    <div className="checkbox-list">
                      { _checklist }
                    </div>
                  </div>
                </Container>);
    }
}

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            title: "title",
            author: "author",
            date: "date",
            description: 'description',
            visible: false,
            checklist: [],
            like: <Icon name="empty heart" link />,
            comment: '0',
            heart: '0',
            scrollY: '0'
        });
        this.fetchData = this.fetchData.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
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
                    like: post.get('like') ? <Icon name="heart" link /> : <Icon name="empty heart" link />
                });
                document.title = _this.state.title + ' - Palm';
            } else {
                console.log('404')
                browserHistory.push('/404');
            }
        }, function(error) {
            browserHistory.push('/404');
        });
    }



    handleScroll(event) {
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
        this.debounce = _.debounce(this.handleScroll, 500, {
            'leading': true,
        })
        window.addEventListener('scroll', this.debounce);
        this.fetchData();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.debounce);
    }

    render() {
        const {visible} = this.state;
        return (
            <div className="App">
              <div>
                <Sidebar as={ Menu } animation='overlay' direction='bottom' visible={ visible } borderless size='huge'>
                  <Menu.Item header name='home' link href='/square'>
                    <Image ui size="mini" src={ logo } />
                    <span>Palm</span>
                  </Menu.Item>
                  <Menu.Item name='heart' style={ { paddingRight: '.5rem' } }>
                    <Icon link size='large' name='empty heart' color='green' />
                    <span className='secondaryText'> { this.state.heart }</span>
                  </Menu.Item>
                  <Menu.Item name='comments' style={ { paddingLeft: '.5rem' } }>
                    <Icon link size='large' name='comment outline' style={ { marginTop: '-.35rem' } } className='secondaryText' />
                    <span className='secondaryText'>{ this.state.comment }</span>
                  </Menu.Item>
                  <Menu.Menu position='right'>
                    <Menu.Item name='heart' style={ { paddingRight: '.5rem' } }>
                      <Icon link size='large' name='wechat' alt='share to wechat friend' color='green' />
                    </Menu.Item>
                    <Menu.Item name='comments' style={ { paddingLeft: '.5rem' } }>
                      <Icon link size='large' name='qq' alt='share to qq friend' style={ { marginTop: '-.35rem' } } className='secondaryText' />
                    </Menu.Item>
                  </Menu.Menu>
                </Sidebar>
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