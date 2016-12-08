import React, { Component } from 'react';
import NavMenu from './Nav';
import { Container, Grid, Image, List, Icon, Menu, Segment, Header, Divider } from 'semantic-ui-react';
import avatar from './assets/images/avatar.jpg';

import './css/Profile.css'


class MenuExampleSecondaryPointing extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({
    activeItem: name
  })

  render() {
    const {activeItem} = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={ activeItem === 'home' } onClick={ this.handleItemClick } />
          <Menu.Item name='messages' active={ activeItem === 'messages' } onClick={ this.handleItemClick } />
          <Menu.Item name='friends' active={ activeItem === 'friends' } onClick={ this.handleItemClick } />
        </Menu>
        <Segment>
          <img src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
        </Segment>
      </div>
    )
  }
}

const ListExampleIcon = () => (
  <List>
    <List.Item icon='users' content='Semantic UI' />
    <List.Item icon='marker' content='New York, NY' />
    <List.Item icon='mail' content={ <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a> } />
    <List.Item icon='linkify' content={ <a href='http://www.semantic-ui.com'>semantic-ui.com</a> } />
  </List>
)

class Profile extends Component {
  render() {
    return (
      <div>
        <NavMenu/>
        <Container>
          <Grid relaxed='very'>
            <Grid.Column mobile={ 16 } tablet={ 4 } computer={ 4 }>
              <div className='avatar'>
                <Image src={ avatar } bordered shape='rounded'></Image>
                <Header as='h2' style={ { marginBottom: 0 } }>Jonas Hao</Header>
                <p>jonashao</p>
              </div>
              <Divider/>
              <div className='introduction'>
                <ListExampleIcon/>
              </div>
            </Grid.Column>
            <Grid.Column mobile={ 16 } tablet={ 12 } computer={ 12 }>
              <MenuExampleSecondaryPointing/>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
      );
  }
}

export default Profile;