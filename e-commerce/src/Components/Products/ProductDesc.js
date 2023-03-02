import React from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ViewProductDetailsHook from "./../../hook/products/view-product-details-hook";
import AddToCartHook from "./../../hook/cart/add-to-cart-hook";
import { ToastContainer } from "react-toastify";

const ProductDesc = () => {
  const { id } = useParams();
  const [item, images, cat, brand] = ViewProductDetailsHook(id);

  const [colorIndex, onColorClicked, addToCartHandle] = AddToCartHook(id, item);

  return (
    <div>
      <Row className="mt-2">
        <div className="cat-text">{cat.name} :</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {item.title}
            <div className="cat-rate d-inline mx-3">{item.ratingsAverage}</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4 mb-3">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{brand.name} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          {item.availableColors
            ? item.availableColors.map((color, index) => {
                return (
                  <div
                    onClick={() => onColorClicked(index, color)}
                    key={index}
                    className="color ms-2"
                    style={{
                      backgroundColor: color,
                      border: colorIndex === index ? "2px solid black" : "none",
                    }}
                  ></div>
                );
              })
            : null}
          <div
            style={{ marginTop: "4px", fontSize: "14px" }}
            className="cat-text d-inline"
          >
            الكمية المتاحة : ({" "}
            <span style={{ color: "#2ecd71", fontWeight: "bold" }}>
              {item.quantity}{" "}
            </span>
            )
          </div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">{item.description}</div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline border">
              <span
                style={{
                  textDecorationLine: "line-through",
                  textDecorationColor: "#DC3545",
                  top: "5px",
                  position: "relative",
                }}
              >
                {item.price}
              </span>{" "}
              {item.priceAfterDiscount} جنيه{" "}
            </div>
          ) : (
            <div className="product-price d-inline border">
              {item.price} جنيه{" "}
            </div>
          )}
          <div
            onClick={addToCartHandle}
            className="product-cart-add-01 d-inline mx-3"
          >
            اضف للعربة
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ProductDesc;
