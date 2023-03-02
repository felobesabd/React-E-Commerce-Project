import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProductsContainer from "../../Components/Products/CardProductsContainer";
import ViewSearchProductsHook from "../../hook/products/view-search-products-hook";
import Pagination from "./../../Components/Utilities/Pagination";
import { useParams } from "react-router-dom";
import ViewAllProductByBrandHook from "./../../hook/products/view-all-product-by-brand-hook";

const ProductByBrand = () => {
  const { id } = useParams();

  const [items, pagination, onPress] = ViewAllProductByBrandHook(id);

  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }

  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <Row className="d-flex flex-row">
          <Col sm="12">
            <CardProductsContainer product={items} />
          </Col>
        </Row>
        {pageCount >= 1 ? (
          <Pagination pageCount={pageCount} onPress={onPress} />
        ) : null}
      </Container>
    </div>
  );
};
export default ProductByBrand;
