import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "./../../Components/Admin/AdminSideBar";
import AdminAllOrders from "./../../Components/Admin/AdminAllOrders";

const AdminAllOrdersPage = () => {
  return (
    <Container>
      <Row className="py-3">
        <Col sm="3" xs="2" md="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" xs="10" md="10">
          <AdminAllOrders />
        </Col>
      </Row>
    </Container>
  );
};
export default AdminAllOrdersPage;
