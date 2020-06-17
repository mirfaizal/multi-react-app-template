import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './App';
import { Auth0Provider } from '../../../react-auth0-spa';
import history from '../../shared/utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getEnvVariable } from '../../shared/types/envUtils';

const onRedirectCallback = (appState?: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

ReactDOM.render(
  <Auth0Provider
    domain={getEnvVariable('auth0Domain')}
    client_id={getEnvVariable('auth0ClientId')}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Admin />
  </Auth0Provider>,
  document.getElementById('root'),
);
