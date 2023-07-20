import React from 'react';
import Container from 'react-bootstrap/Container';
import classes from './ChooseUs.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaBoxes, FaPencilRuler, FaStopwatch, FaWallet } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';
import { AiOutlineStock } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import image from '../../../assets/images/df.png';

const ChooseUs = () => {
  return (
    <Container className={classes.container}>
      <h1 className={classes.slogan}>
        WHY <h1 className={classes.slogann}>CHOOSE US</h1>
      </h1>
      <Row className={classes['row-style']}>
        <IconContext.Provider
          value={{ color: 'white', className: 'icons-class' }}
        >
          <Col>
            <Row className={classes['row-margin']}>
              <Col xs={3}>
                <i>
                  <FaWallet />
                </i>
              </Col>
              <Col>
                <h4>CONNECT YOUR WALLET</h4>
                <p>Use Trust Wallet, Metamast to connect to the app</p>
              </Col>
            </Row>
            <Row className={classes['row-margin']}>
              <Col xs={3}>
                <i>
                  <FaPencilRuler />
                </i>
              </Col>
              <Col>
                <h4>SELECT YOUR QUANTITY</h4>
                <p>Upload your crypto and set a title</p>
              </Col>
            </Row>
            <Row className={classes['row-margin']}>
              <Col xs={3}>
                <i>
                  <BsLightningChargeFill />
                </i>
              </Col>
              <Col>
                <h4>CONFIRM TRANSACTIONS</h4>
                <p>Earn tokens when you sell or buy on our market</p>
              </Col>
            </Row>
          </Col>
          <Col>
            <img className={classes.image} src={image} alt="logo" />
          </Col>
          <Col>
            <Row className={classes['row-margin']}>
              <Col xs={3}>
                <i>
                  <FaStopwatch />
                </i>
              </Col>
              <Col>
                <h4>TRACK IN REAL TIME</h4>
                <p>The best and Fastest data update on the market</p>
              </Col>
            </Row>
            <Row className={classes['row-margin']}>
              <Col xs={3}>
                <i>
                  <AiOutlineStock />
                </i>
              </Col>
              <Col>
                <h4>TAKE A MARKET TO SELL OR BUY</h4>
                <p>Discover the nest new crypto to buy or sell</p>
              </Col>
            </Row>
            <Row className={classes['row-margin']}>
              <Col xs={3}>
                <i>
                  <FaBoxes />
                </i>
              </Col>
              <Col>
                <h4>DRIVE YOUR COLLECTION</h4>
                <p>We make it easy to Didcover, Invest and manage</p>
              </Col>
            </Row>
          </Col>
        </IconContext.Provider>
      </Row>
    </Container>
  );
};

export default ChooseUs;
