import React from 'react';
import classes from './Compliance.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../../../assets/images/compliance.jpg'

const Compliance = () => {
  return (
    <Container className={classes.container}>
      <Row>
        <Col>
					<img src={image} alt="compliance" className={classes.compliance} />
				</Col>
        <Col>
          <h1 className={classes.header}>Our Commitment to Compliance</h1>
          <p className={classes['p-text']}>
            A strong compliance foundation is critical to Coinbase’s mission of
            being the most trusted crypto platform. Adherence to regulatory
            requirements in all jurisdictions in which Coinbase operates ensures
            that we keep our customers - and the broader financial ecosystem -
            safe. To this end, we have developed a Compliance Program that is
            rooted in best practices from traditional financial services as well
            as innovative, sophisticated compliance technology to bring the
            crypto industry forward. We hold a high standard for what assets we
            list, what services we provide, and who has access to our products.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Compliance;
