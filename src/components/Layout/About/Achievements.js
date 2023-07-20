import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './Achievements.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Achievements = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col>
          <h1 className={classes.header}>We power the cryptoeconomy</h1>
          <p className={classes['p-text']}>
            Customers around the world discover and begin their journeys with
            crypto through Coinbase.
          </p>
          <p className={classes['p-text']}>
            245,000 ecosystem partners in over 100 countries trust Coinbase to
            easily and securely invest, spend, save, earn, and use crypto.
          </p>
        </Col>
        <Col className={classes.text}>
          <Row>
            <Col>
              <Card
                style={{ width: '9rem', height: '7rem' }}
                className={classes.row}
              >
                <Card.Body>
                  <Card.Title>$145B</Card.Title>
                  <Card.Text>Quarterly volume traded</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: '9rem', height: '7rem' }}
                className={classes.row}
              >
                <Card.Body>
                  <Card.Title>$130B</Card.Title>
                  <Card.Text>Assets on platform</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: '9rem', height: '7rem' }}
                className={classes.row}
              >
                <Card.Body>
                  <Card.Title>100+</Card.Title>
                  <Card.Text>Countries</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card
                style={{ width: '9rem', height: '7rem' }}
                className={classes.row}
              >
                <Card.Body>
                  <Card.Title>3,500+</Card.Title>
                  <Card.Text>Employees</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Achievements;
