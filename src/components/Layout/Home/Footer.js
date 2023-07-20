import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Footer.module.css';
import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Container className={classes.container}>
      <h3>
        <a href="https://twitter.com/" className={classes.links}>
          <FaTwitter size={40} />
        </a>
        <a href="https://discord.com/" className={classes.links}>
          <FaDiscord size={40} />
        </a>
        <a href="https://facebook.com/" className={classes.links}>
          <FaFacebook size={40} />
        </a>
        <a href="https://youtube.com/" className={classes.links}>
          <FaYoutube size={40} />
        </a>
      </h3>
			<p><a href="/" className={classes.links}>Privacy</a> <a href="/" className={classes.links}>Terms of Use</a></p>
    </Container>
  );
};

export default Footer;
