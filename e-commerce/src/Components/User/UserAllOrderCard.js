import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import baseUrl from "../../Api/baseURL";
import mobile from "../../images/mobile.png";
const UserAllOrderCard = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Row className="d-flex mb-2">
        <Col xs="3" md="2" className="d-flex justify-content-start">
          <Link
            to={`/products/${item.product._id}`}
            style={{ textDecoration: "none" }}
          >
            <img
              width="93px"
              height="120px"
              src={item.product.imageCover}
              alt="prod"
            />
          </Link>
        </Col>
        <Col xs="8" md="6">
          <div className="d-inline pt-2 cat-title">
            {item.product.title || ""}
          </div>
          <div className="cat-rate pt-2 d-inline mx-1 me-2">
            {item.product.ratingsAverage ? item.product.ratingsAverage : 0}
          </div>
          <div className="rate-count d-inline p-1 pt-2">
            ({`${item.product.ratingsQuantity || 0} تقييم`})
          </div>
          <div className="mt-3 d-flex">
            <div className="cat-text d-inline mt-1">الكميه</div>
            <input
              value={item.count}
              className="mx-2 text-center"
              type="number"
              style={{ width: "40px", height: "30px" }}
            />
            <div
              className="color ms-2 d-inline"
              style={{ backgroundColor: item.color }}
            ></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderCard;
