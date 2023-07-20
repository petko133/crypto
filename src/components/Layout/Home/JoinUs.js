import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './JoinUs.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBitcoin, FaDiscord, FaEthereum, FaTwitter } from 'react-icons/fa';

const JoinUs = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col xs={3}>
          <div className="ball">
            <FaEthereum size={70} style={{ marginTop: '14px' }} />
          </div>
        </Col>
        <Col>
          <h1 className={classes.slogan}>
            JOIN US ON <h1 className={classes.slogann}>DISCORD OR TWITTER</h1>
          </h1>
        </Col>
        <Col xs={3}>
          <div className="ball">
            <FaBitcoin size={70} style={{ marginTop: '14px' }} />
          </div>
        </Col>
      </Row>
			<h4>We have the best comunity</h4>
      <a href="https://discord.com/" className={classes.button}>
        <FaDiscord /> Discord
      </a>
      <a href="https://twitter.com/" className={classes.button}>
        <FaTwitter /> Twitter
      </a>
    </Container>
  );
};

export default JoinUs;
