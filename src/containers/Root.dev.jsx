import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import DevTools from './DevTools'

import App from '../components/App';
import Login from '../components/Login';
import Square from '../components/Square';
import Search from '../components/Search';
import PostContainer from '../containers/PostContainer';
import Profile from '../components/Profile';

export default class Root extends Component {
    render() {
        const {store, history} = this.props;
        return (
            <Provider store={ store }>
              <div>
                <Router history={ history }>
                  <Route path="/" component={ App } />
                  <Route path="/404" component={ App } />
                  <Route path="/login" component={ Login } />
                  <Route path="/square" component={ Square } />
                  <Route path="/search" component={ Search } />
                  <Route path="/:postId" component={ PostContainer } />
                  <Route path="/user/:userId" component={ Profile } />
                </Router>
                <DevTools/>
              </div>
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
