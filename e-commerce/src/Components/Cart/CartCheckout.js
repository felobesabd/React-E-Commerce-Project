import React, { useEffect } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import DeleteCartHook from "./../../hook/cart/delete-cart-hook";
import { ToastContainer } from "react-toastify";
import ApplyCouponHook from "./../../hook/cart/apply-coupon-hook";
import notify from "../../hook/useNotifications";

const CartCheckout = ({
  totalCartPrice,
  totalCartPriceAfterDiscount,
  couponNameRes,
  cartItems,
}) => {
  const [
    handleDeleteCart,
    handleDeleteSpecificItem,
    handleClose,
    handleShow,
    showDelete,
  ] = DeleteCartHook();

  const [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckout] =
    ApplyCouponHook(cartItems);

  useEffect(() => {
    if (couponNameRes) {
      onChangeCoupon(couponNameRes);
    }
  }, [couponNameRes]);

  return (
    <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
      <Col xs="12" className="d-flex flex-column">
        <div className="d-flex">
          <input
            value={couponName}
            onChange={(e) => onChangeCoupon(e.target.value)}
            className="copon-input d-inline text-center"
            placeholder="كود الخصم"
          />
          <button onClick={handleSubmitCoupon} className="copon-btn d-inline">
            تطبيق
          </button>
        </div>
        <div className="product-price d-inline w-100 my-3 border">
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

        <button
          onClick={handleCheckout}
          className="product-cart-add w-100 px-2"
        >
          إتمام الشراء
        </button>

        <Modal show={showDelete} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>
              <div className="onlyfont">تأكيد الحذف</div>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#f9f9f9" }}>
            <div className="onlyfont">
              هل أنت متأكد من حذف جميع منتجات العربة؟
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              <div className="onlyfont">تراجع</div>
            </Button>
            <Button variant="danger" onClick={handleDeleteCart}>
              <div className="onlyfont">تأكيد الحذف</div>
            </Button>
          </Modal.Footer>
        </Modal>
        <button
          onClick={handleShow}
          className="product-cart-add w-100 px-2 my-2"
        >
          مسح العربة
        </button>
      </Col>
      <ToastContainer />
    </Row>
  );
};

export default CartCheckout;
