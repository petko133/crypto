import React from 'react';
import { Container } from 'react-bootstrap';

const Error = () => {
  return (
    <Container className='error-container'>
      <h1 className='error-h1'>Sorry something went wrong! Please go back to the home page.</h1>
      <a href="/" className="home-button">
        Home
      </a>
    </Container>
  );
};

export default Error;
