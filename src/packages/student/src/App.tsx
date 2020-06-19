import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useAuth0 } from '../../../react-auth0-spa';
import history from '../../shared/utils/history';
import Course from './component/Course';
import ConnectWithTeacher from './component/ConnectWithTeacher';
import Loading from '../../shared/components/Loading';
import NavBar from '../../shared/components/NavBar';
import Footer from '../../landing/src/Footer';
import StudentLanding from './component/StudentLanding';
import Profile from '../../shared/components/Profile';
import { getNavMenu, isStudent } from '../../shared/utils';
import PageNotFound from '../../shared/components/PageNotFound';

const App = () => {
  const { user, loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <Loading />;
  }
  if (!isAuthenticated) {
    return <Redirect to='/' />;
  }
  const PageNotFoundRouter = () => <Route path={'/student/404'} component={PageNotFound} />;
  return (
    <Router>
      {isStudent(user, isAuthenticated) && (
        <div id='app' className='d-flex flex-column h-100'>
          <NavBar navMenu={getNavMenu(user, isAuthenticated)} />
          <Container className='flex-grow-1 mt-5'>
            <Switch>
              <>
                <Route exact path={'/student'} component={withRouter(StudentLanding)} />
                <Route exact path={'/student/connectwithteacher'} component={withRouter(ConnectWithTeacher)} />
                <Route exact path={'/student/course'} component={withRouter(Course)} />
                <Route exact path={'/student/profile'} component={withRouter(Profile)} />
                <Route component={PageNotFoundRouter} />
              </>
            </Switch>
          </Container>
        </div>
      )}
      <Footer />
    </Router>
  );
};

export default App;
