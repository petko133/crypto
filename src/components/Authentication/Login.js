import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';

const Login = ({ handleClose, setShow }) => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = baseUrl + 'login';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (!data.token | !data.userId | !data.email | !data.watchlist) {
					return alert(data.message)
        } else {
          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('email', data.email);
          sessionStorage.setItem('userId', data.userId);
          sessionStorage.setItem('watchlist', data.watchlist);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          localStorage.setItem('watchlist', data.watchlist);
          setLoggedIn(true);
          setShow(false);
          alert(data.message);
        }
      });
  };

  return (
    <>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@email.com"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              onSubmit={handleSubmit}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              onSubmit={handleSubmit}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Log In
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};

export default Login;
