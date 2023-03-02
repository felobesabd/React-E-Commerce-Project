import React from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import CouponCardHook from "./../../hook/coupon/coupon-card-hook";
const AdminCouponCard = ({ coupon }) => {
  const [formatDate, dateString, show, handleClose, handleShow, handleDelete] =
    CouponCardHook(coupon);

  return (
    <div className="user-address-card px-2 my-3">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="onlyfont">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f9f9f9" }}>
          <div className="onlyfont">هل أنت متأكد من حذف الكوبون؟</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="onlyfont">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            <div className="onlyfont">تأكيد الحذف</div>
          </Button>
        </Modal.Footer>
      </Modal>
      <Row className="d-flex justify-content-between">
        <Col xs="6">
          <div className="p-2">
            أسم الكوبون:{" "}
            <span style={{ fontWeight: "bold", color: "#0fac51" }}>
              {coupon.name}
            </span>
          </div>
        </Col>
        <Col xs="6" className="d-flex justify-content-end">
          <div className="d-flex p-2">
            <Link
              to={`/admin/edit-coupon/${coupon._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="d-flex mx-2">
                <img
                  alt=""
                  className="ms-1 mt-2"
                  src={editicon}
                  height="17px"
                  width="15px"
                />
                <p className="item-delete-edit"> تعديل</p>
              </div>
            </Link>
            <div onClick={handleShow} className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "14px",
            }}
          >
            تاريخ الانتهاء: {formatDate(dateString)}
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
          >
            نسبة الخصم:
          </div>

          <div
            style={{
              color: "#979797",
              fontFamily: "Almarai",
              fontSize: "16px",
            }}
            className="mx-2"
          >
            {coupon.discount}%
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminCouponCard;
