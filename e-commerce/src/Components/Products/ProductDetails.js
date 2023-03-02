import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductDesc from "./ProductDesc";

const ProductDetails = () => {
  return (
    <div>
      <Row className="py-3">
        <Col lg="4">
          <ProductGallery />
        </Col>
        <Col lg="8" className="">
          <ProductDesc />
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
