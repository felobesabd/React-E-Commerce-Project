import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";
import VerifyPasswordHook from "./../../hook/auth/verify-password-hook";

const VerifyPasswordPage = () => {
  const [onChangeCode, code, OnSubmit] = VerifyPasswordHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className=" d-flex flex-column">
          <label className="mx-auto title-login">
            قم بادخال الكود المرسل عبر الايميل
          </label>
          <input
            value={code}
            onChange={onChangeCode}
            placeholder="ادخل الكود..."
            type="email"
            className="user-input my-3 text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <button onClick={OnSubmit} className="btn-login mx-auto mt-2">
            تأكيد
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default VerifyPasswordPage;
