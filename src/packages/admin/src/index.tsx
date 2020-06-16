import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './App';
import { Auth0Provider } from '../../../react-auth0-spa';
const config = require('../../../auth_config.json');
import history from '../../shared/utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';

const onRedirectCallback = (appState?: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Admin />
  </Auth0Provider>,
  document.getElementById('root'),
);
