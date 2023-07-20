import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Banner.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import phoneImage from '../../../assets/images/phone.jpg';

const Banner = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col>
          <img src={phoneImage} alt="phone" className={classes.image} />
        </Col>
        <Col>
          <h1 className={classes.slogan}>About us</h1>
          <p className={classes['slogan-text']}>
            We are building the cryptoeconomy – a more fair, accessible,
            efficient, and transparent financial system enabled by crypto. We
            started in 2012 with the radical idea that anyone, anywhere, should
            be able to easily and securely send and receive Bitcoin. Today, we
            offer a trusted and easy-to-use platform for accessing the broader
            cryptoeconomy.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
