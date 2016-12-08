import React, {Component} from 'react';
import {Menu, Image, Container} from 'semantic-ui-react'

import logo from './assets/images/logo.png';
import avatar from './assets/images/avatar.jpg';

class NavMenu extends Component {
    render() {
        return (
            <Menu size="huge" borderless>
                <Container>
                    <Menu.Item header name='home'>
                        <Image ui size="mini" src={logo}/>
                        <span>Palm</span>
                    </Menu.Item>

                    <Menu.Menu position='right'>
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
