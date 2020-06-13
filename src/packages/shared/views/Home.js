import React, { Fragment } from 'react';

import Welcome from '../components/Welcome';
import Content from '../components/Content';

const Home = () => (
  <Fragment>
    <Welcome />
    <hr />
    <Content />
  </Fragment>
);

export default Home;
