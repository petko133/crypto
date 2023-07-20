import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import classes from './AuthModal.module.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Login from './Login';
import Register from './Register';
import { LoginContext } from '../../App';
import { baseUrl } from '../../shared';

const AuthModal = () => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogOut = (e) => {
    e.preventDefault();
    const url = baseUrl + 'logout';
    fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: localStorage.getItem('userId'),
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        sessionStorage.clear();
				localStorage.token = ''
        setLoggedIn(false);
        alert(data.message)
      });
  };

  return (
    <>
      {loggedIn ? (
        <Button className={classes.btn} onClick={handleLogOut}>
          Log Out
        </Button>
      ) : (
        <Button className={classes.btn} onClick={handleShow}>
          LogIn
        </Button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Tabs
          defaultActiveKey="login"
          id="justify-tab-example"
          className={classes.tabs}
          justify
        >
          <Tab eventKey="login" title="LogIn">
            <Login handleClose={handleClose} setShow={setShow} />
          </Tab>
          <Tab eventKey="signup" title="SignUp">
            <Register handleClose={handleClose} setShow={setShow} />
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
};

export default AuthModal;
