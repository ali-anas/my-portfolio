import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth0 } from "@auth0/auth0-react";
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
  //   return (
	// 	<span className="nav-link port-navbar-link clickable"> Login </span>
  // )
	const { loginWithRedirect } = useAuth0();
	return <span className="nav-link port-navbar-link clickable" onClick={() => loginWithRedirect()}>Log In</span>;
}

const Logout = () => {
    return (
		<span className="nav-link port-navbar-link clickable"> Logout </span>
	)
}

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
//   const bg = '#02203c';

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color='fade' dark expand="md">
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
                <NavItem className="port-navbar-item">
                    <Login />
                </NavItem>
                <NavItem className="port-navbar-item">
                    <Logout />
                </NavItem>
            
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