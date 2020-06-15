import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useAuth0 } from '../../../react-auth0-spa';
import Admin from '../../admin/src/App';
import Loading from '../../shared/components/Loading';
import history from '../../shared/utils/history';
import Home from '../../shared/views/Home';
import Profile from '../../shared/views/Profile';
import Student from '../../student/src/App';
import Teacher from '../../teacher/src/App';
import Footer from './Footer';
import NavBar from '../../shared/components/NavBar';

const App = () => {
  const { loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
            <Route exact={true} path={'/'} component={Home} />
            {isAuthenticated && (
              <>
                <Route exact={true} path={'/admin'} component={Admin} />
                <Route exact={true} path={'/student'} component={Student} />
                <Route exact={true} path={'/teacher'} component={Teacher} />
                <Route exact={true} path={'/profile'} component={Profile} />
              </>
            )}
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
