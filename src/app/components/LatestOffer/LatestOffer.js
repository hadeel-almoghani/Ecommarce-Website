import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './latestoffer.css'

function LatestOffer() {
  return (
    <Container className="latest-offer d-flex">
     <Row className="align-items-center"> 
        <Col md={7} sm={12}>
        <h3>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h3>
        </Col>
        <Col md={5} sm={12}>
        <div className="latest-offer-item">
        <form className="email-form d-flex flex-column">
          <input type="email" placeholder="Enter your email address" />
          <button type="submit" className="btn-submit">
          Subscribe to Newsletter
          </button>
        </form>
      </div>
        </Col>
     
     </Row>
    
    </Container>
  );
}

export default LatestOffer;
