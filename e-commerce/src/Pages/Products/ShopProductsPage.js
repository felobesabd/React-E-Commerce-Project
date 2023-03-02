import React from "react";
import CategoryHeader from "./../../Components/Category/CategoryHeader";
import SearchCountResults from "./../../Components/Utilities/SearchCountResults";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "./../../Components/Utilities/SideFilter";
import CardProductsContainer from "./../../Components/Products/CardProductsContainer";
import Pagination from "./../../Components/Utilities/Pagination";
import ViewSearchProductsHook from "../../hook/products/view-search-products-hook";

const ShopProductsPage = ({ title }) => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();
  if (pagination) {
    var pageCount = pagination;
  } else {
    pageCount = 0;
  }
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryHeader />
      <Container>
        <SearchCountResults
          onClick={getProduct}
          title={`${results} نتيجة بحث`}
        />
        <Row className="d-flex flex-row">
          <Col sm="2" xs="2" md="1" className="d-flex">
            <SideFilter />
          </Col>
          <Col sm="10" xs="10" md="11">
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

export default ShopProductsPage;
