import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import SubTitle from "./../Utilities/SubTitle";
import BrandCard from "./BrandCard";
import brand1 from "../../images/brand1.png";
import HomeBrandHook from "../../hook/brand/home-brand-hook";

const BrandCardFeatures = ({ title, btntitle, pathText }) => {
  const [brand, loading] = HomeBrandHook();

  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathText="/allbrand" />
      <Row className="my-1 d-flex justify-content-between">
        {loading === false ? (
          brand ? (
            brand.data.slice(0, 5).map((item, index) => {
              return <BrandCard id={item._id} key={index} img={item.image} />;
            })
          ) : (
            <h4>لا يوجد تصنيفات</h4>
          )
        ) : (
          <Spinner className="m-auto" animation="border" variant="primary" />
        )}
      </Row>
    </Container>
  );
};

export default BrandCardFeatures;
