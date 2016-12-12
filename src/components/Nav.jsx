import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Menu, Image, Container, Search } from 'semantic-ui-react'

import _ from 'lodash';
import AV from 'leancloud-storage';

import log from '../utils/LogUtil';

import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.jpg';


class NavMenu extends Component {

  static defaultProps = {
    search: false,
    source: [],
  };

  static propTypes = {
    search: React.PropTypes.bool,
    source: React.PropTypes.array
  };

  setup(message) {
    this.cancel();
    let _this = this;
    this.timeoutID = window.setTimeout(
      function() {
        _this.handleSearch(message);
        delete this.timeoutID;
      }, 500);
  }

  cancel() {
    if (typeof this.timeoutID == "number") {
      window.clearTimeout(this.timeoutID);
      delete this.timeoutID;
    }
  }

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

  handleSearch(value) {
    if (value.length < 1) return this.resetComponent()
    log(value);
    // `i` means ignore uppercase and lower case
    const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
    const isMatch = (result) => re.test(result.title)

    this.setState({
      isLoading: false,
      results: _.filter(this.props.source, isMatch),
    })
    delete this.timeoutID;
  }

  handleSearchChange = (e, value) => {
    this.setState({
      isLoading: true,
      value
    })

    this.setup(value);
  }

  render() {
    let search = undefined;
    if (this.props.search) {
      const {isLoading, value, results} = this.state
      search = <Menu.Item>
                 <Search size="mini" loading={ isLoading } onResultSelect={ this.handleResultSelect } onSearchChange={ this.handleSearchChange } onChange={ this.handleSearch.bind(this) } results={ results }
                   value={ value } />
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


