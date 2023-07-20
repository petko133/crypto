import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Banner.module.css';
import Carousel from './Carousel';

const Banner = () => {
  return (
    <>
      <Container className={classes['center-align']}>
        <h1 className={classes.slogan}>
          TRACK ANY <h1 className={classes.slogann}>CRYPTO CURRENCY</h1> DATA
        </h1>
      </Container>
      <Carousel />
    </>
  );
};

export default Banner;
