import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "./../../hook/auth/reset-password-hook";

const RestPasswordPage = () => {
  const [
    password,
    confirmPassword,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ] = ResetPasswordHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className=" d-flex flex-column">
          <label className="mx-auto title-login">ادخل كلمة السر الجديدة</label>
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="ادخل كلمة السر"
            type="password"
            className="user-input my-3 text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="تأكيد كلمة السر"
            type="password"
            className="user-input my-3 text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <button onClick={OnSubmit} className="btn-login mx-auto mt-2">
            حفظ
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RestPasswordPage;
