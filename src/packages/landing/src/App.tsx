import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Student from '../../student/src/App';
import Teacher from '../../teacher/src/App';
import Admin from '../../admin/src/App';

class App extends React.Component {
  public render() {
    return (
      <>
        <Router>
          <div>Hello Landing Page</div>
          <Student/>
          <Teacher/>
          <Admin/>
        </Router>
      </>
    );
  }
}

export default App;
