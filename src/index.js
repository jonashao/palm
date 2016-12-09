import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import Post from './Post';
import Square from './Square';
import SearchPage from './Search';
import Profile from './Profile';
import './css/index.css';
import AV from 'leancloud-storage';

const appId = 'Ba37Dom669CUYe5Gf63nYygC-gzGzoHsz';
const appKey = 'W1PLLphokPT88VEqNm0jIVoF';
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


