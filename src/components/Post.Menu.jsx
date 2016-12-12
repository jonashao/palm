import React from 'react';
import { Sidebar, Menu, Icon, Image } from 'semantic-ui-react'


import logo from '../assets/images/logo.png';


const PostMenu = ({visible, heart, comment}) => (
  <Sidebar as={ Menu } animation='overlay' direction='bottom' visible={ visible } borderless size='huge'>
    <Menu.Item header name='home' link href='/square'>
      <Image ui size="mini" src={ logo } />
      <span>Palm</span>
    </Menu.Item>
    <Menu.Item name='heart' style={ { paddingRight: '.5rem' } }>
      <Icon link size='large' name='empty heart' color='green' />
      <span className='secondaryText'> { heart }</span>
    </Menu.Item>
    <Menu.Item name='comments' style={ { paddingLeft: '.5rem' } }>
      <Icon link size='large' name='comment outline' style={ { marginTop: '-.35rem' } } className='secondaryText' />
      <span className='secondaryText'>{ comment }</span>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item name='heart' style={ { paddingRight: '.5rem' } }>
        <Icon link size='large' name='wechat' alt='share to wechat friend' color='green' />
      </Menu.Item>
      <Menu.Item name='comments' style={ { paddingLeft: '.5rem' } }>
        <Icon link size='large' name='qq' alt='share to qq friend' style={ { marginTop: '-.35rem' } } className='secondaryText' />
      </Menu.Item>
    </Menu.Menu>
  </Sidebar>);

export default PostMenu;

