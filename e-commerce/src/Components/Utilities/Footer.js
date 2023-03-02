import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import phone from "../../images/phone.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
  return (
    <div
      className="footer-background footer mt-5 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center">
            <div className="footer-shroot">الشروط و الاحكام</div>
            <div className="footer-shroot mx-2">سياسة الخصوصية</div>
            <div className="footer-shroot mx-2">اتصل بنا</div>
          </Col>
          <Col sm="6" className="d-flex justify-content-end align-items-center">
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="phone" />
              <p className="footer-phone">01011110022</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="phone" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={instagram} alt="phone" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={twitter} alt="phone" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
