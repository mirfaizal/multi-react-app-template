import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from '../../../serviceWorker';
import { Auth0Provider } from '../../../react-auth0-spa';
import history from '../../shared/utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
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
    <App />
  </Auth0Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
