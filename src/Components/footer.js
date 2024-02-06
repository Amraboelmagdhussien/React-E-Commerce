import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>Our Services</li>
              <li>Product Features</li>
              <li>Pricing</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Connect</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
