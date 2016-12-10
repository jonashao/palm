import React, { Component } from 'react';
import _ from 'lodash';
import { Menu, Image, Container, Search } from 'semantic-ui-react'
import AV from 'leancloud-storage';
import logo from './assets/images/logo.png';
import avatar from './assets/images/avatar.jpg';

class NavMenu extends Component {

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({
    isLoading: false,
    results: [],
    value: ''
  })

  handleResultSelect = (e, result) => this.setState({
    value: result.title
  })


  handleSearch(value) {
    setTimeout(() => {
      if (value.length < 1) return this.resetComponent()
      var query = new AV.SearchQuery('Post');
      let _this = this;
      query.sortBy(new AV.SearchSortBuilder().descending('description', 'avg', 'last'));
      query.queryString(value);
      // query.find().then(function(results) {
      //   console.log(results);
      //   let _results = [];
      //   for (let post in results) {
      //     // let item = {
      //     //   title: post.get('title'),
      //     //   author: post.get('author'),
      //     //   description: post.get('description').substring(0, 140)
      //     // }
      //     // console.log('item:' + item);
      //   }
      //   _this.setState({
      //     isLoading: false,
      //     results: _results
      //   })
      // });

      console.log('after query');
      this.setState({
        isLoading: false
      })

    }, 2000);

    console.log('end');
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
                   {...this.props}/>
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


