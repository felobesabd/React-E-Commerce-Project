import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import AddCouponHook from "./../../hook/coupon/add-coupon-hook";
import AdminCouponCard from "./AdminCouponCard";

const AdminAddCoupon = () => {
  const dataRef = useRef();

  const [
    couponName,
    couponDate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    OnSubmit,
    coupons,
  ] = AddCouponHook();

  return (
    <div>
      <Row className="justify-content-start">
        <div className="admin-content-text pb-4">أضف كوبون جديد</div>
        <Col sm="8">
          <input
            onChange={onChangeCouponName}
            value={couponName}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="اسم الكوبون"
          />

          <input
            ref={dataRef}
            onChange={onChangeCouponDate}
            value={couponDate}
            onFocus={() => (dataRef.current.type = "date")}
            onBlur={() => (dataRef.current.type = "text")}
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
            حفظ الكوبون
          </button>
        </Col>
      </Row>
      <Row>
        <Col sm="8">
          {coupons ? (
            coupons.map((item, index) => {
              return <AdminCouponCard key={index} coupon={item} />;
            })
          ) : (
            <h6>لا يوجد كوبونات في الوقت الحالي</h6>
          )}
          <ToastContainer />
        </Col>
      </Row>
    </div>
  );
};

export default AdminAddCoupon;
