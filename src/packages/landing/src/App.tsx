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
  // Lets hard code role here and populate nav menu according to role
  var navMenus = [
    { description: 'Home', url: '/', label: 'Home', level: 0, uniqueId: 0 },
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
  ];

  return (
    <Router history={history}>
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar navMenu={navMenus} />
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
