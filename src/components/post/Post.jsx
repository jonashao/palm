import React, {Component, PropTypes} from 'react';
import {Sidebar} from 'semantic-ui-react';

import Content from './Content';
import SideBarMenu from './Menu';

import _ from 'lodash';
import '../../css/Post.css';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            scrollY: '0'
        }
    }

    handleScroll = () => {
        let y = window.scrollY;
        // two parentheses are necessary to bool first.
        if ((y<this.state.scrollY)) {
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
        const {content, count:{heart, comment}} = this.props;
        const {visible} = this.state;
        return (
            <div className="App">
                <SideBarMenu visible={ visible } heart={ heart } comment={ comment }/>
                <Sidebar.Pusher>
                    <Content content={content}/>
                </Sidebar.Pusher>
            </div>
        );
    }
}

export default Post;