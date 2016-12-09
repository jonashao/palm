import React, { Component } from 'react';
import { Menu, Image, Container, Search } from 'semantic-ui-react'

import logo from './assets/images/logo.png';
import avatar from './assets/images/avatar.jpg';

class NavMenu extends Component {
  render() {
    const search = this.props.search
      ? <Menu.Item>
          <Search size="mini" />
        </Menu.Item>
      : undefined;

    return (
      <Menu borderless size="huge">
        <Container>
          <Menu.Item href="/square" header name='home' style={ { padding: '.5rem' } }>
            <Image ui width="30" src={ logo } />
            <span>Palm</span>
          </Menu.Item>
          <Menu.Menu position='right'>
            { search }
            <Menu.Item style={ { padding: '.5rem' } }>
              <Image avatar src={ avatar } style={ { margin: 0 } } />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}

export default NavMenu;
