import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import EditCouponHook from "../../hook/coupon/edit-coupon-hook";
import { useParams } from "react-router-dom";

const AdminEditCoupon = () => {
  const { id } = useParams();

  const [
    couponName,
    couponDate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    OnSubmit,
  ] = EditCouponHook(id);
  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">تعديل الكوبون</div>
        <Col sm="8">
          <input
            onChange={onChangeCouponName}
            value={couponName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />

          <input
            onChange={onChangeCouponDate}
            value={couponDate}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="تاريخ الانتهاء"
          />

          <input
            onChange={onChangeCouponValue}
            value={couponValue}
            type="number"
            className="input-form d-block mt-3 px-3"
            placeholder="نسبة خصم الكوبون"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end">
          <button onClick={OnSubmit} className="btn-save d-inline mt-2">
            حفظ التعديل
          </button>
        </Col>
      </Row>
      <Row>
        <Col sm="8">
          <ToastContainer />
        </Col>
      </Row>
    </div>
  );
};

export default AdminEditCoupon;
