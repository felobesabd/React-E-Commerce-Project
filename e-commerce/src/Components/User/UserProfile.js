import React, { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import editicon from "../../images/edit.png";
import ProfileHook from "./../../hook/user/profile-hook";
import { ToastContainer } from "react-toastify";

const UserProfile = () => {
  const [
    user,
    show,
    handleClose,
    handleShow,
    handleSubmit,
    name,
    email,
    phone,
    oldPass,
    newPass,
    confirmNewPass,
    onChangeOldPass,
    onChangeNewPass,
    onChangeConfirmNewPass,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    changePassword,
  ] = ProfileHook();

  return (
    <div>
      <div className="admin-content-text">الصفحة الشخصية</div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <div className="onlyfont">تعديل البيانات الشخصية</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#f9f9f9" }}>
          <input
            value={name}
            onChange={onChangeName}
            type="text"
            className="input-form d-block mt-3 px-3 font"
            placeholder="اسم المستخدم"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            type="email"
            className="input-form d-block mt-3 px-3 font"
            placeholder="البريد الالكتروني"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            type="phone"
            className="input-form d-block mt-3 px-3 font"
            placeholder="الهاتف"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            <div className="onlyfont">تراجع</div>
          </Button>
          <Button variant="danger" onClick={handleSubmit}>
            <div className="onlyfont">حفظ التعديل</div>
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="user-address-card my-3 px-2">
        <Row className="justify-content-between pt-2">
          <Col xs="6" className="d-flex">
            <div className="p-2">الاسم: </div>
            <div className="p-1 item-delete-edit">{user.name}</div>
          </Col>
          <Col xs="6" className="d-flex justify-content-end">
            <div onClick={handleShow} className="d-flex mx-2">
              <img
                className="ms-1 mt-2"
                alt="deleteicon"
                src={editicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit">تعديل</p>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">رقم الهاتف: </div>
            <div className="p-1 item-delete-edit">{user.phone}</div>
          </Col>
        </Row>

        <Row className="">
          <Col xs="12" className="d-flex">
            <div className="p-2">الإيميل: </div>
            <div className="p-1 item-delete-edit">{user.email}</div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs="10" sm="8" md="6" className="">
            <div className="admin-content-text">تغيير كلمة المرور</div>
            <input
              value={oldPass}
              onChange={onChangeOldPass}
              type="password"
              className="input-form d-block mt-1 px-3"
              placeholder="ادخل كلمة المرور القديمة"
            />
            <input
              value={newPass}
              onChange={onChangeNewPass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="ادخل كلمة المرور الجديدة"
            />
            <input
              value={confirmNewPass}
              onChange={onChangeConfirmNewPass}
              type="password"
              className="input-form d-block mt-3 px-3"
              placeholder="تأكيد كلمة المرور الجديدة"
            />
          </Col>
        </Row>

        <Row>
          <Col xs="10" sm="8" md="6" className="d-flex justify-content-end ">
            <button
              onClick={changePassword}
              className="btn-save d-inline mt-2 "
            >
              حفظ كلمة السر
            </button>
          </Col>
        </Row>
        <ToastContainer />
      </div>
    </div>
  );
};

export default UserProfile;
