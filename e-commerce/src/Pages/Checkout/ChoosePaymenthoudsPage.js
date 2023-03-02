import React from "react";
import { Container } from "react-bootstrap";
import ChoosePaymenthouds from "../../Components/Checkout/ChoosePaymenthouds";

const ChoosePaymenthoudsPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <ChoosePaymenthouds />
    </Container>
  );
};

export default ChoosePaymenthoudsPage;
