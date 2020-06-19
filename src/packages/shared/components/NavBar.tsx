import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { useAuth0 } from '../../../react-auth0-spa';
import { INavBarProps, INavMenu } from '../types/Common';

export interface INavBarObjProp extends INavBarProps {
  isAuthenticated: boolean;
}

const NavBarObj: React.FC<INavBarObjProp> = ({ isAuthenticated, navMenu }: any) => {
  let navItems: any = [];
  if (!isAuthenticated) {
    return <></>;
  }
  navMenu.forEach((item: INavMenu) => {
    const navItem = (
      <NavItem key={item.uniqueId}>
        <NavLink tag={RouterNavLink} to={item.url} exact activeClassName='router-link-exact-active'>
          {item.label}
        </NavLink>
      </NavItem>
    );
    // if (item.level !== 1) {
      navItems.push(navItem);
    // }
  });
  return (
    <>
      <Nav className='mr-auto' navbar>
        {navItems}
      </Nav>
    </>
  );
};

const NavBar: React.FC<INavBarProps> = (props: INavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className='nav-container'>
      <Navbar color='light' light expand='md'>
        <Container>
          <NavbarBrand className='logo' />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            {isAuthenticated && <NavBarObj navMenu={props.navMenu} isAuthenticated={isAuthenticated} />}
            <Nav className='d-none d-md-block' navbar>
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id='profileDropDown'>
                    <img src={user.picture} alt='Profile' className='nav-user-profile rounded-circle' width='50' />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem id='qsLogoutBtn' onClick={() => logoutWithRedirect()}>
                      <FontAwesomeIcon icon='power-off' className='mr-3' /> Log out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>

            {isAuthenticated && (
              <Nav className='d-md-none justify-content-between' navbar style={{ minHeight: 170 }}>
                <NavItem>
                  <FontAwesomeIcon icon='power-off' className='mr-3' />
                  <RouterNavLink to='#' id='qsLogoutBtn' onClick={() => logoutWithRedirect()}>
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
