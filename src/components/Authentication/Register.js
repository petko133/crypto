import axios from 'axios';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { baseUrl } from '../../shared';
import { LoginContext } from '../../App';

const Register = ({ handleClose, setShow }) => {
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const header = {
        Authorization: 'Bearer ' + sessionStorage.token,
      };
      const data = { email, password, confirmPassword };
      const response = await axios.post(baseUrl + 'signup', data, {
        headers: header,
      });
      if (
        !response.data.token |
        !response.data.userId |
        !response.data.email 
      ) {
				console.log('yoo');
        return alert(response.message);
      } else {
        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('email', response.email);
        sessionStorage.setItem('userId', response.userId);
        sessionStorage.setItem('watchlist', response.watchlist);
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.userId);
        localStorage.setItem('watchlist', response.watchlist);
        setLoggedIn(true);
        setShow(false);
        alert(response.data.message);
      }
    } catch (err) {
			alert(err.response.data.message)
		}
  };

  return (
    <>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@email.com"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSubmit}>
          Register
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </>
  );
};

export default Register;
