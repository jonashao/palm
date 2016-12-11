import ReactDOM from 'react-dom';
import AV from 'leancloud-storage';
import PalmRouter from './components/Router';
import { appId, appKey } from './avconfig'

import './css/index.css';

AV.init({
  appId,
  appKey
});


ReactDOM.render(PalmRouter, document.getElementById('root'));


