
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useAuth0 } from '../../../react-auth0-spa';

const App = () => {
  const { loading, user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  if(!isAuthenticated){
    return (<></>);
  }
  return (
    <>
      <Router>
        <div>Hello Teacher App</div>
      </Router>
    </>
  );
};

export default App;
