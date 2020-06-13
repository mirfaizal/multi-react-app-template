import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import PrivateRoute from '../../shared/components/PrivateRoute';
import Loading from '../../shared/components/Loading';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from '../../shared/views/Home';
import Welcome from '../../shared/components/Welcome';
import Profile from '../../shared/views/Profile';
import { useAuth0, Auth0Provider } from '../../../react-auth0-spa';
import history from '../../shared/utils/history';
const config = require('../../../auth_config.json');

const onRedirectCallback = (appState?: any) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

const PublicRoute = () => <Route path='' component={Welcome}></Route>;

const ProtectedRoute = () => (
  <Auth0Provider
    redirect_uri={window.location.origin}
    domain={config.domain}
    client_id={config.clientId}
    onRedirectCallback={onRedirectCallback}
  >
    <Route exact={true} path={'/'} component={Home} />
  </Auth0Provider>
);

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
            <Route path={'/public'} component={PublicRoute} />
            <Route path={'/'} component={ProtectedRoute} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
