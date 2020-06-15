import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { useAuth0 } from '../../../react-auth0-spa';
import history from '../../shared/utils/history';
import Announcement from './component/Announcement';
import CrudCourse from './component/CrudCourse';
import CrudTeacher from './component/CrudStudent';
import CrudStudent from './component/CrudTeacher';
import Loading from '../../shared/components/Loading';
import { Redirect } from 'react-router-dom';
import NavBar from '../../shared/components/NavBar';
import Footer from '../../landing/src/Footer';

const App = () => {
  const { loading, isAuthenticated } = useAuth0();
  console.log('I am in Admin Page isAuthenticated : ', isAuthenticated);
  if (loading) {
    return <Loading />;
  }
  return (
    <Router history={history}>
      {!isAuthenticated && <Redirect to='/' />}
        
      <div id='app' className='d-flex flex-column h-100'>
      <NavBar />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
            {isAuthenticated && (
              <>
                <Route exact={true} path={'/admin/teacher'} component={CrudTeacher} />
                <Route exact={true} path={'/admin/student'} component={CrudStudent} />
                <Route exact={true} path={'/admin/announcement'} component={Announcement} />
                <Route exact={true} path={'/admin/course'} component={CrudCourse} />
              </>
            )}
          </Switch>
        </Container>
        
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
