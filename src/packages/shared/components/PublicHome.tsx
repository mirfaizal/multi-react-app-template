import React, { Fragment, useState } from 'react';
import Welcome from './Welcome';
import Footer from '../../landing/src/Footer';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { useAuth0 } from '../../../react-auth0-spa';

const PublicNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log('Inside Toggle', isOpen);
    setIsOpen(!isOpen);
  };
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='nav-container'>
      <Navbar color='light' light expand='md'>
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='d-none d-md-block' navbar>
              <NavItem>
                <Button id='qsLoginBtn' color='primary' className='btn-margin' onClick={() => loginWithRedirect({})}>
                  Log in
                </Button>
              </NavItem>
            </Nav>
            <Nav className='d-md-none' navbar>
              <NavItem>
                <Button id='qsLoginBtn' color='primary' block onClick={() => loginWithRedirect({})}>
                  Log in
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const PublicHome = () => {
  return (
    <Fragment>
      <PublicNavBar />
      <Welcome />
      <Footer />
    </Fragment>
  );
};

export default PublicHome;
