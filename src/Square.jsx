import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Headroom from 'react-headroom';
import {
    Menu,
    Segment,
    Header,
    Input,
    Image,
    Search
} from 'semantic-ui-react'

import logo from './assets/images/logo.png';
import avatar from './assets/images/avatar.jpg';

// import { Header, Image } from 'semantic-ui-react' const HeaderExampleImage =
// () => (   <Header as='h2'>     <Image shape='circular'
// src='http://semantic-ui.com/images/avatar2/large/patrick.png' />     {'
// '}Patrick   </Header> )

class MenuExampleInvertedSecondary extends Component {

    render() {
        return (
            <Menu size="huge" pointing secondary>
                <Menu.Item header name='home'>
                    <Image ui size="mini" src={logo}/>
                    <span>Palm</span>
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Search size="mini"/>
                    </Menu.Item>

                    <Menu.Item>
                        <Image avatar shape='circular' src={avatar}/>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

class Square extends Component {
    render() {
        return (
            <div className="Square">
                <Headroom>
                    <MenuExampleInvertedSecondary/>
                </Headroom>

                <div style={{
                    'height': '1200px'
                }}/>
            </div>
        );
    }
}

export default Square;
