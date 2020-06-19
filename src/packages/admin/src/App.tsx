import React from 'react';
import { Route, BrowserRouter as Router, Switch, withRouter,Redirect } from 'react-router-dom';
import { useAuth0 } from '../../../react-auth0-spa';
import Announcement from './component/Announcement';
import CrudCourse from './component/CrudCourse';
import CrudStudent from './component/CrudStudent';
import CrudTeacher from './component/CrudTeacher';
import Loading from '../../shared/components/Loading';
import NavBar from '../../shared/components/NavBar';
import Footer from '../../landing/src/Footer';
import AdminLanding from './component/AdminLanding';
import Profile from '../../shared/components/Profile';
import { getNavMenu, isAdmin } from '../../shared/utils';
import { Container } from 'reactstrap';

const App = () => {
  const { user, loading, isAuthenticated } = useAuth0();
  if (loading) {
    return <Loading />;
  }
  if(!isAuthenticated){
    return <Redirect to='/' />;
  }
 
  return (
    <Router>
      {isAdmin(user,isAuthenticated) && (
      <div id='app' className='d-flex flex-column h-100'>
        <NavBar navMenu={getNavMenu(user, isAuthenticated)} />
        <Container className='flex-grow-1 mt-5'>
          <Switch>
              <>
                <Route exact path={'/admin'} component={withRouter(AdminLanding)} />
                <Route exact path={'/admin/teacher'} component={withRouter(CrudTeacher)} />
                <Route exact path={'/admin/student'} component={withRouter(CrudStudent)} />
                <Route exact path={'/admin/announcement'} component={withRouter(Announcement)} />
                <Route exact path={'/admin/course'} component={withRouter(CrudCourse)} />
                <Route exact path={'/admin/profile'} component={withRouter(Profile)} />
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
