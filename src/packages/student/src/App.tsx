
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  public render() {
    return (
      <>
        <Router>
          <div>
            Hello Student App
            </div>
        </Router>
      </>
    );
  }
}

export default App;
