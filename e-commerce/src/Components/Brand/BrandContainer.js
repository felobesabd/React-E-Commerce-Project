import React from "react";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";
const BrandContainer = ({ data, loading }) => {
  return (
    <div>
      <Container>
        <div className="admin-content-text mt-3">كل الماركات</div>
        <Row className="my-1 d-flex justify-content-between">
          {loading === false ? (
            data ? (
              data.slice(0, 5).map((item, index) => {
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
    </div>
  );
};

export default BrandContainer;
