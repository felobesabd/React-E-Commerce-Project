import React from "react";
import UserAllOrderCard from "./UserAllOrderCard";
import { Col, Row } from "react-bootstrap";

const UserAllOrderItem = ({ orderItem }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="user-order px-2 mt-2">
      <Row>
        <div className="py-2 order-title">
          طلب رقم #{orderItem.id} ... تم بتاريخ{" "}
          {formatDate(orderItem.createdAt)}
        </div>
      </Row>
      {orderItem.cartItems
        ? orderItem.cartItems.map((item, index) => {
            return <UserAllOrderCard key={index} item={item} />;
          })
        : null}

      <Row className="d-flex justify-content-between">
        <Col xs="6" className="d-flex">
          <div>
            <div className="d-inline ">التوصيل:</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isDelivered === true ? "تم التوصيل" : "لم يتم التوصيل"}
            </div>
          </div>
          <div>
            <div className="d-inline ">الدفع:</div>
            <div className="d-inline mx-2 stat">
              {orderItem.isPaid === true ? "تم الدفع" : "لم يتم الدفع"}
            </div>
          </div>
          <div>
            <div className="d-inline ">طريقة الدفع:</div>
            <div className="d-inline mx-2 stat">
              {orderItem.paymentMethodType === "cash"
                ? "كاش"
                : "بطاقة إئتمانية"}
            </div>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div>
            <div className="brand-text">
              {orderItem.totalOrderPrice || 0} جنيه
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAllOrderItem;
