import React, { useState } from 'react';
import Link from 'next/link';
import auth0 from '../../services/auth0';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const MyNavLink = (props) => {
    const { route, title } = props;

    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const Login = () => {
    return (
		<span onClick={auth0.login} className="nav-link port-navbar-link clickable"> Login </span>
	)
}

const Logout = () => {
    return (
		<span onClick={auth0.logout} className="nav-link port-navbar-link clickable"> Logout </span>
	)
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  // const bg = '#02203c';

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color='transparent' dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Anas</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                  <NavItem className="port-navbar-item">
                      <MyNavLink route="/" title="Home" />
                    </NavItem>
                <NavItem className="port-navbar-item">
                    <MyNavLink route="/about" title="About" />
                </NavItem>
                <NavItem className="port-navbar-item">
                    <MyNavLink route="/portfolios" title="Portfolios" />
                </NavItem>
                <NavItem className="port-navbar-item">
                    <MyNavLink route="/cv" title="CV" />
                </NavItem>
                <NavItem className="port-navbar-item">
                    <MyNavLink route="/blogs" title="Blogs" />
                </NavItem>
                {   !auth0.isAuthenticated() &&
                    <NavItem className="port-navbar-item">
                        <Login />
                    </NavItem>
                }
                {   auth0.isAuthenticated() &&
                    <NavItem className="port-navbar-item">
                        <Logout />
                    </NavItem>
                }
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
          {/* <NavItem className="port-navbar-item"> */}
              {/* <MyNavLink route="/about" title="About" /> */}
          {/* </NavItem> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;