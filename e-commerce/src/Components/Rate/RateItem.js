import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import rate from "../../images/rate.png";
import deleteicon from "../../images/delete.png";
import editicon from "../../images/edit.png";
import DeleteReviewHook from "./../../hook/review/delete-review-hook";
import { ToastContainer } from "react-toastify";
import EditReviewHook from "./../../hook/review/edit-review-hook";
import ReactStars from "react-rating-stars-component";

const RateItem = ({ review }) => {
  // console.log(review.user._id);

  const [isUser, handleDelete, handleClose, handleShow, showDelete] =
    DeleteReviewHook(review);

  const [
    showEdit,
    handleCloseEdit,
    handleEdit,
    handleShowEdit,
    onChangeReviewText,
    newReviewText,
    onChangeRateValue,
    newRateValue,
  ] = EditReviewHook(review);

  // To Make Stars
  const settings = {
    size: 20,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: newRateValue,
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
      <Modal show={showDelete} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="onlyfont">تأكيد الحذف</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f9f9f9" }}>
          <div className="onlyfont">هل أنت متأكد من حذف التعليق؟</div>
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

      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header>
          <Modal.Title>
            <div className="onlyfont">تعديل المراجعة</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f9f9f9" }}>
          <ReactStars {...settings} />
          <input
            value={newReviewText}
            onChange={onChangeReviewText}
            type="text"
            className="font w-100 "
            style={{ border: "none", outline: "none" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            <div className="onlyfont">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleEdit}>
            <div className="onlyfont">تأكيد التعديل</div>
          </Button>
        </Modal.Footer>
      </Modal>

      <Row className="mt-3">
        <Col className="me-5">
          <div className="rate-name d-inline ms-2">{review.user.name}</div>
          <img
            className="ms-2"
            src={rate}
            alt="rate"
            height="16px"
            width="16px"
          />
          <div className="cat-rate d-inline p-1 pt-2">{review.rating}</div>
        </Col>
      </Row>

      <Row className="border-bottom mx-2">
        <Col className="me-4 pb-2">
          <div className="rate-description  d-inline ms-2">{review.review}</div>

          {isUser === true ? (
            <div className="d-inline d-flex justify-content-end">
              <img
                onClick={handleShow}
                src={deleteicon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="delete"
                className="mx-2"
              />

              <img
                onClick={handleShowEdit}
                src={editicon}
                width="20px"
                height="20px"
                style={{ cursor: "pointer" }}
                alt="editicon"
              />
            </div>
          ) : null}
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};

export default RateItem;
