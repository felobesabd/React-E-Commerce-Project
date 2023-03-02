import React from "react";
import CartItem from "./../Cart/CartItem";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import UserAllOrderItem from "./../User/UserAllOrderItem";
import GetOrderDetailsHook from "./../../hook/admin/get-order-details-hook";
import ChangeOrderStatusHook from "./../../hook/admin/change-order-status-hook";
import { ToastContainer } from "react-toastify";

const AdminOrderDetails = () => {
  const { id } = useParams();

  const [orderData, cartItems] = GetOrderDetailsHook(id);
  console.log(orderData);
  console.log(cartItems);

  const [
    pay,
    formatDate,
    onChangePayment,
    onChangePayOrder,
    onChangeDeliver,
    onChangeDeliverOrder,
  ] = ChangeOrderStatusHook(id);

  return (
    <div>
      <div className="admin-content-text">تفاصيل طلب رقم #{orderData.id}</div>
      <UserAllOrderItem orderItem={orderData} />
      <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className="d-flex">
          <div className="admin-content-text py-3">تفاصيل العميل</div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الإسم:
          </div>
          <div
            className="mx-2"
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            {orderData ? (orderData.user ? orderData.user.email : "") : ""}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            رقم الهاتف:{" "}
          </div>
          <div
            className="mx-2"
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            {orderData ? (orderData.user ? orderData.user.phone : "") : ""}
          </div>
        </Col>
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            الإيميل:{" "}
          </div>
          <div
            className="mx-2"
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            {orderData ? (orderData.user ? orderData.user.email : "") : ""}
          </div>
        </Col>
        <div className="d-inline px-4 border text-center pt-2">
          المجموع: {orderData.totalOrderPrice} جنيه مصري
        </div>
        <Row className="d-flex mt-2 justify-content-center">
          <Col xs="8" className="d-flex mb-2 justify-content-center">
            <select
              onChange={onChangePayment}
              name="payment"
              id="payment"
              className="select input-form-area mt-1 text-center w-50"
            >
              <option value="0">حالة الدفع</option>
              <option value="true">تم الدفع</option>
              <option value="false">لم يتم الدفع</option>
            </select>
            <button
              onClick={onChangePayOrder}
              className="btn-a px-3 d-inline mx-2"
            >
              حفظ
            </button>
            <select
              onChange={onChangeDeliver}
              name="deliver"
              id="deliver"
              className="select input-form-area mt-1 text-center w-50"
            >
              <option value="0">حالة التوصيل</option>
              <option value="true">تم التوصيل</option>
              <option value="false">لم يتم التوصيل</option>
            </select>
            <button
              onClick={onChangeDeliverOrder}
              className="btn-a px-3 d-inline mx-2"
            >
              حفظ
            </button>
          </Col>
        </Row>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default AdminOrderDetails;
