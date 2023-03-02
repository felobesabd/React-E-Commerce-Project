import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSidebar from "../../Components/User/UserSideBar";
import UserProfile from "./../../Components/User/UserProfile";

const UserProfilePage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <UserSidebar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
