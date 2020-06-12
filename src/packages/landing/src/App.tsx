import React, { lazy, Suspense } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "../../shared/components/PrivateRoute";
import Loading from "../../shared/components/Loading";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Home from "../../shared/views/Home";
import Profile from "../../shared/views/Profile";
import { useAuth0 } from '../../../react-auth0-spa';
import history from "../../shared/utils/history";

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;



// <div>Hello Landing Page</div>
//           <Student/>
//           <Teacher/>
//           <Admin/>