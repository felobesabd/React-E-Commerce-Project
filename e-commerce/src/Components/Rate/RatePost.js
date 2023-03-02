import React from "react";
import ReactStars from "react-rating-stars-component";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import AddRateHook from "./../../hook/review/add-rate-hook";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
const RatePost = () => {
  const { id } = useParams();
  const [
    rateText,
    rateValue,
    onChangeRateText,
    onChangeRateValue,
    user,
    OnSubmit,
  ] = AddRateHook(id);

  var name = "";
  if (user) {
    name = user.name;
  }
  const settings = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      onChangeRateValue(newValue);
    },
  };
  return (
    <div>
      <Row className="mt-3 ">
        <Col sm="12" className="me-5  d-flex">
          <div className="rate-name  d-inline ms-3 mt-1 ">{name}</div>
          <ReactStars {...settings} />
        </Col>
      </Row>
      <Row className="border-bottom mx-2">
        <Col className="me-4 pb-2">
          <textarea
            value={rateText}
            onChange={onChangeRateText}
            className="input-form-area p-2 mt-3"
            rows="2"
            cols="20"
            placeholder="اكتب تعليقك...."
          />
          <div className=" d-flex justify-content-end al">
            <div
              onClick={OnSubmit}
              className="product-cart-add add-comment px-3 text-center d-inline"
            >
              اضف تعليق
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RatePost;
