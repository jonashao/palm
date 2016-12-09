import React from 'react';
import ReactDOM from 'react-dom';
import AV from 'leancloud-storage';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Post from './Post';
import Square from './Square';
import SearchPage from './Search';
import Profile from './Profile';
import { appId, appKey } from './avconfig'

import './css/index.css';

AV.init({
  appId,
  appKey
});

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }></Route>
    <Route path="/404" component={ App }></Route>
    <Route path="/square" component={ Square }></Route>
    <Route path="/search" component={ SearchPage }></Route>
    <Route path="/:postId" component={ Post }></Route>
    <Route path="/user/:userId" component={ Profile }></Route>
  </Router>, document.getElementById('root'));


