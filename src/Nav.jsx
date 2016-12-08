import React, {Component} from 'react';
import {Menu, Image, Container, Search} from 'semantic-ui-react'

import logo from './assets/images/logo.png';
import avatar from './assets/images/avatar.jpg';

class NavMenu extends Component {
    render() {
        const search = this.props.search
            ? <Menu.Item>
                    <Search size="mini"/>
                </Menu.Item>
            : undefined;

        return (
            <Menu size="huge" borderless>
                <Container>
                    <Menu.Item href="#/square" header name='home'>
                        <Image ui size="mini" src={logo}/>
                        <span>Palm</span>
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        {search}
                        <Menu.Item>
                            <Image avatar shape='circular' src={avatar}/>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

export default NavMenu;
