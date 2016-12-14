import React from 'react';
import ReactDOM from 'react-dom';
import AV from 'leancloud-storage';
import Root from './containers/Root';
import configureStore from './store/configureStore'
import { appId, appKey } from './avconfig'
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import 'semantic-ui-css/semantic.min.css';
import './css/index.css';

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

AV.init({
  appId,
  appKey
});

ReactDOM.render(< Root store={ store } history={ history } />, document.getElementById('root'));