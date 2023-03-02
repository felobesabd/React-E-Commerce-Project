import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobile from "../../images/mobile.png";
import deleteicon from "../../images/delete.png";

const AdminAllOrderItem = ({ orderItem }) => {
  console.log(orderItem);
  return (
    <Col xs="12">
      <Link
        to={`/admin/orders/${orderItem._id}`}
        className="cart-item-body-admin my-2 d-flex px-3"
        style={{ textDecoration: "none" }}
      >
        <div className="w-100">
          <Row className="justify-content-between ">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">
                طلب رقم #{orderItem.id}
              </div>
              <div className="d-flex pt-2 " style={{ cursor: "pointer" }}></div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline px- pt-2 cat-title">
                طلب من ... {orderItem.user.name || ""}
              </div>
              <div
                className="d-inline pt-2 cat-rate me-3"
                style={{ color: "#979797" }}
              >
                {orderItem.user.email || ""}
              </div>
            </Col>
          </Row>

          <Row className="d-flex justify-content-between mt-3">
            <Col xs="8" className="d-flex">
              <div>
                <div style={{ color: "#555550" }} className="d-inline ">
                  التوصيل:
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isDelivered === true
                    ? "تم التوصيل"
                    : "لم يتم التوصيل"}
                </div>
              </div>
              <div>
                <div style={{ color: "#555550" }} className="d-inline ">
                  الدفع:
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.isPaid === true ? "تم الدفع" : "لم يتم الدفع"}
                </div>
              </div>
              <div>
                <div style={{ color: "#555550" }} className="d-inline ">
                  طريقة الدفع:
                </div>
                <div className="d-inline mx-2 stat">
                  {orderItem.paymentMethodType === "cash"
                    ? "كاش"
                    : "بطاقة إئتمانية"}
                </div>
              </div>
            </Col>
            <Col xs="4" className="d-flex justify-content-end">
              <div>
                <div className="brand-text">
                  {orderItem.totalOrderPrice || 0} جنيه
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Link>
    </Col>
  );
};

export default AdminAllOrderItem;
