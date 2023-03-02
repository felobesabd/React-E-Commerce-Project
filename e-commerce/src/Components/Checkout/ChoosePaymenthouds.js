import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ViewUserAddressHook from "../../hook/user/view-user-address-hook";
import OrderPayCashHook from "./../../hook/checkout/order-pay-cash-hook";
import { ToastContainer } from "react-toastify";
import notify from "./../../hook/useNotifications";
import OrderPayVisaHook from "./../../hook/checkout/order-pay-visa-hook";
import GetAllUserCartHook from "./../../hook/cart/get-all-user-cart-hook";

const ChoosePaymenthouds = () => {
  const [res] = ViewUserAddressHook();

  const [handleChooseAddress, addressDetails, handleCreateOrderCash] =
    OrderPayCashHook();

  const [handleCreateOrderVISA] = OrderPayVisaHook(addressDetails);

  const [, , totalCartPrice, , totalCartPriceAfterDiscount, ,] =
    GetAllUserCartHook();

  const [type, setType] = useState("");

  const changeMethod = (e) => {
    setType(e.target.value);

    console.log(e.target.value);
  };

  const handlePay = () => {
    if (type === "VISA") {
      handleCreateOrderVISA();
    } else if (type === "CASH") {
      handleCreateOrderCash();
    } else {
      notify("من فضلك أختر طريقة الدفع", "warn");
    }
  };

  return (
    <div>
      <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
      <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between ">
          <Col xs="12" className="my-2">
            <input
              onChange={changeMethod}
              style={{ cursor: "pointer" }}
              name="group"
              id="group1"
              type="radio"
              value="VISA"
              className="mt-2"
            />
            <label style={{ cursor: "pointer" }} className="mx-2" for="group1">
              الدفع عن طريق الفيزا
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="12" className="d-flex">
            <input
              onChange={changeMethod}
              style={{ cursor: "pointer" }}
              name="group"
              id="group2"
              type="radio"
              value="CASH"
              className="mt-2"
            />
            <label style={{ cursor: "pointer" }} className="mx-2" for="group2">
              الدفع عند الاستلام
            </label>
          </Col>
        </Row>

        <Row className="mt-2">
          <Col xs="4" className="d-flex">
            <select
              onChange={handleChooseAddress}
              name="address"
              id="address"
              className="select mt-2 px-2"
            >
              <option value="0">أختر عنوان للشحن</option>

              {res.data ? (
                res.data.map((item, index) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.alias}
                    </option>
                  );
                })
              ) : (
                <option key={0} value={0}>
                  لا يوجد عناوين مسجلة
                </option>
              )}
            </select>
          </Col>
        </Row>
      </div>

      <Row>
        <Col xs="12" className="d-flex justify-content-end">
          <div
            className="product-price d-inline border"
            style={{ width: "18%" }}
          >
            {totalCartPriceAfterDiscount >= 1 ? (
              <div>
                <span
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationColor: "#DC3545",
                  }}
                >
                  {totalCartPrice}
                </span>{" "}
                جنيه ... {totalCartPriceAfterDiscount} جنيه بعد الخصم
              </div>
            ) : (
              `${totalCartPrice} جنيه`
            )}
          </div>
          <button onClick={handlePay} class="product-cart-add me-2 px-3">
            إتمام الشراء
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default ChoosePaymenthouds;
