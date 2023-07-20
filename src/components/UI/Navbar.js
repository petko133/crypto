import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Navbar.module.css';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import AuthModal from '../Authentication/AuthModal';
import { LoginContext } from '../../App';

const NavbarPrimary = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);

  return (
    <Navbar expand="lg" className={classes['navbar-transperant']}>
      <Container>
        <Navbar.Brand href="/">
          <h2>CoinBro</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={classes.links}
        >
          <i className={classes.links}>
            <GiHamburgerMenu />
          </i>
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basiv-navbar-nav"
          className={`${classes['links']}`}
        >
          <Nav className="ms-auto">
            <Nav.Link className={classes['links']} href="/">
              Home
            </Nav.Link>
            <Nav.Link className={classes['links']} href="/about">
              Aboout Us
            </Nav.Link>
            {loggedIn ? (
              <Nav.Link
                className={classes['links']}
								href={`/watchlist/${localStorage.userId}`}
              >
                Watchlist
              </Nav.Link>
            ) : (
              <></>
            )}
          </Nav>          
          <Nav expand="lg" className="ms-auto">
            <Nav.Link
              className={`${classes['links']}`}
              href="https://twitter.com/"
            >
              <FaTwitter />
            </Nav.Link>
            <Nav.Link
              className={`${classes['links']}`}
              href="https://discord.com/"
            >
              <FaDiscord />
            </Nav.Link>
            <AuthModal />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPrimary;
