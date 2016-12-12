import React from 'react';
import ReactDOM from 'react-dom';
import AV from 'leancloud-storage';
import Root from './components/Root';
import { createStore } from 'redux'

import { appId, appKey } from './avconfig'

import reducer from './reducers'
import './css/index.css';

const store = createStore(reducer)

AV.init({
  appId,
  appKey
});


ReactDOM.render(<Root store={ store } />, document.getElementById('root'));


