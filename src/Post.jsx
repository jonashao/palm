import React, {Component} from 'react';
import './Post.css';
import 'semantic-ui-css/semantic.min.css';
import {Sidebar, Menu, Icon, Container, Checkbox} from 'semantic-ui-react'

class CheckItem extends Component {
    render() {
        return (
            <div className="cha-item">
                <Checkbox label={this.props.label}/>
            </div>
        );
    }
}

class Post extends Component {

    findPostById(postId)
    {
        return {title: postId, author: "Jonas", date: "Jul. 13, 2016"};
    }

    loadChaListData() {
        return [
            {
                text: "Label1"
            }, {
                text: "Label1"
            }, {
                text: "Label1"
            }, {
                text: "Label1"
            }
        ]
    }

    constructor(props) {
        super(props);
        this.state = ({
            post: this.findPostById(this.props.params.postId),
            chaListData: this.loadChaListData(),
            like: <Icon name="empty heart"/>,
            visible: false
        });

        this.handleScroll = this
            .handleScroll
            .bind(this);

    }

    handleScroll(event) {
        var delta = event.deltaY;
        if (delta < 0) {
            this.toggleVisibility(true);
        } else {
            this.toggleVisibility(false);
        }
    }

    toggleVisibility = (visibility) => this.setState({visible: visibility})

    componentDidMount() {
        window.addEventListener('wheel', this.handleScroll);

    }
    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        const {visible} = this.state
        var chaList = [];
        this
            .state
            .chaListData
            .forEach((cha, index) => {
                var chaItem = <CheckItem key={index} id={index} label={cha.text}/>;
                chaList.push(chaItem);
            });

        return (
            <div className="App">
                <div>
                    <Sidebar
                        as={Menu}
                        animation='overlay'
                        direction='bottom'
                        visible={visible}
                        borderless
                        size='huge'>
                        <Menu.Item name='home'>
                            <Icon name='home'/>
                            Home
                        </Menu.Item>
                        <Menu.Item name='gamepad'>
                            <Icon name='gamepad'/>
                            Games
                        </Menu.Item>
                        <Menu.Item name='camera'>
                            <Icon name='camera'/>
                            Channels
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Container>
                            <div className="cha-container">
                                <div className="post-information">
                                    <h1>{this.state.post.title}</h1>
                                    <div className="secondaryText">
                                        <span>
                                            {this.state.post.author}</span>
                                        ·
                                        <span>{this.state.post.date}</span>

                                        <span>
                                            {this.state.like}
                                        </span>
                                    </div>
                                </div>
                                <div className="post-intro">
                                    <p>React Router is built with history. In a nutshell, a history knows how to
                                        listen to the browser's address bar for changes and parses the URL into a
                                        location object that the router can use to match routes and render the correct
                                        set of components.
                                    </p>
                                </div>

                                <div className="checkbox-list">
                                    {chaList}
                                </div>
                            </div>
                        </Container>

                    </Sidebar.Pusher>
                </div>
            </div>

        );
    }
}

export default Post;