import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import SubTitle from "./../Utilities/SubTitle";
import { Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import CardContainerHook from "./../../hook/products/card-container-hook";

const CardProductsContainer = ({ title, btntitle, pathText, product }) => {
  const [favProd] = CardContainerHook();

  return (
    <Container>
      {product ? (
        <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
      ) : null}

      <Row className="my-2 d-flex justify-content-start">
        {product
          ? product.map((item, index) => (
              <ProductCard favProd={favProd} key={index} item={item} />
            ))
          : null}
      </Row>
    </Container>
  );
};

export default CardProductsContainer;
