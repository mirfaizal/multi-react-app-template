import React from 'react';
import { Route, Router, Switch, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useAuth0 } from '../../../react-auth0-spa';
import history from '../../shared/utils/history';
import Announcement from './component/Announcement';
import CrudCourse from './component/CrudCourse';
import CrudStudent from './component/CrudStudent';
import CrudTeacher from './component/CrudTeacher';
import Loading from '../../shared/components/Loading';
import { Redirect } from 'react-router-dom';
import NavBar from '../../shared/components/NavBar';
import Footer from '../../landing/src/Footer';
import AdminLanding from './component/AdminLanding';
import Profile from '../../shared/views/Profile';

const App = () => {
  const { user, loading, isAuthenticated } = useAuth0();
  console.log('I am in Admin Page isAuthenticated : ', isAuthenticated);
  if (loading) {
    return <Loading />;
  }
  const jsonObj = JSON.parse(JSON.stringify(user));
  console.log(jsonObj);
  const { email } = jsonObj;

  JSON.parse(email, (key, value) => {});

  // Lets hard code role here and populate nav menu according to role
  var navMenus = [
    { description: 'Home', url: '/admin', label: 'Admin Home', level: 0, uniqueId: 0 },
    { description: 'Only for Administrator use', url: '/admin', label: 'Administration', level: 1, uniqueId: 1 },
    { description: 'Only for Administrator use', url: '/admin/student', label: 'Student', level: 2, uniqueId: 2 },
    { description: 'Only for Administrator use', url: '/admin/teacher', label: 'Teacher', level: 2, uniqueId: 3 },
    {
      description: 'Only for Administrator use',
      url: '/admin/announcement',
      label: 'Announcement',
      level: 2,
      uniqueId: 4,
    },
    { description: 'Only for Administrator use', url: '/admin/course', label: 'Course', level: 2, uniqueId: 5 },
    { description: 'Administrator Profile', url: '/admin/profile', label: 'Profile', level: 2, uniqueId: 6 },
  ];
  return (
    <Router history={history}>
      {!isAuthenticated && <Redirect to='/' />}
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar navMenu={navMenus} />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
            {isAuthenticated && (
              <>
                <Route exact path={'/admin'} component={withRouter(AdminLanding)} />
                <Route exact path={'/admin/teacher'} component={withRouter(CrudTeacher)} />
                <Route exact path={'/admin/student'} component={withRouter(CrudStudent)} />
                <Route exact path={'/admin/announcement'} component={withRouter(Announcement)} />
                <Route exact path={'/admin/course'} component={withRouter(CrudCourse)} />
                <Route exact path={'/admin/profile'} component={withRouter(Profile)} />
              </>
            )}
          </Switch>
        </Container>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
