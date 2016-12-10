import React, { Component } from 'react';
import _ from 'lodash';
import { Menu, Image, Container, Search } from 'semantic-ui-react'
import AV from 'leancloud-storage';
import logo from './assets/images/logo.png';
import avatar from './assets/images/avatar.jpg';
import { browserHistory } from 'react-router';

class NavMenu extends Component {

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({
    isLoading: false,
    results: [],
    value: ''
  })

  handleResultSelect(e, result) {
    browserHistory.push('/search?q=' + result.title);
  }

  handleReturn(e) {
    console.log('hi' + e);
    browserHistory.push('/search?q=' + this.state.value);
  }

  handleSearch(value) {
    setTimeout(() => {
      if (value.length < 1) return this.resetComponent()
      // `i` means ignore uppercase and lower case
      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.props.source, isMatch),
      })

    }, 500);
  }

  handleSearchChange = (e, value) => {
    this.setState({
      isLoading: true,
      value
    })

    this.handleSearch(value);
  }

  render() {
    let search = undefined;
    if (this.props.search) {
      const {isLoading, value, results} = this.state
      search = <Menu.Item>
                 <Search size="mini" loading={ isLoading } onResultSelect={ this.handleResultSelect } onSearchChange={ this.handleSearchChange } results={ results } value={ value }
                   onChange={ this.handleReturn.bind(this) } />
               </Menu.Item>
    }


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


