import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useAuth0 } from '../../../react-auth0-spa';
import Admin from '../../admin/src/App';
import Loading from '../../shared/components/Loading';
import history from '../../shared/utils/history';
import PublicHome from '../../shared/components/PublicHome';
import Student from '../../student/src/App';
import Teacher from '../../teacher/src/App';
import { withRouter, Redirect } from 'react-router';
import { isAdmin, isStudent } from '../../shared/utils';
import GlobalState from './context/GlobalState';

const App = () => {
  const { loading, isAuthenticated, user } = useAuth0();

  if (loading) {
    return <Loading />;
  }
  return (
    <Router history={history}>
      <GlobalState>
      {!isAuthenticated && <Redirect to='/' />}
      {isAdmin(user, isAuthenticated) && <Redirect to='/admin' />}
      {isStudent(user, isAuthenticated) && <Redirect to='/student' />}
      <Container className='flex-grow-1 mt-5'>
        <Switch>
          <Route exact path={'/'} component={PublicHome} />
          {isAuthenticated && (
            <>
              <Route exac path={'/admin'} component={withRouter(Admin)} />
              <Route exact path={'/student'} component={withRouter(Student)} />
              <Route exact path={'/teacher'} component={withRouter(Teacher)} />
            </>
          )}
        </Switch>
      </Container>
      </GlobalState>
    </Router>
    
  );
};

export default App;
