import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterHook from "./../../hook/auth/register-hook";
import { ToastContainer } from "react-toastify";
const Register = () => {
  const [
    name,
    email,
    password,
    confirmPassword,
    phone,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onChangePhone,
    OnSubmit,
  ] = RegisterHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className=" d-flex flex-column">
          <label className="mx-auto title-login">انشاء حساب جديد</label>
          <input
            value={name}
            onChange={onChangeName}
            placeholder="أسم المستخدم..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="الايميل..."
            type="email"
            className="user-input my-3 text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="كلمة السر..."
            type="password"
            className="user-input text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="تأكيد كلمة السر..."
            type="password"
            className="user-input mt-3 text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <input
            value={phone}
            onChange={onChangePhone}
            placeholder="رقم الهاتف..."
            type="phone"
            className="user-input mt-3 text-center mx-auto"
            style={{ fontSize: "17px" }}
          />
          <button onClick={OnSubmit} className="btn-login mx-auto mt-4">
            تسجيل الحساب
          </button>
          <label className="mx-auto my-4">
            لديك حساب بالفعل؟{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span
                style={{ cursor: "pointer", fontWeight: "bold" }}
                className="text-danger"
              >
                إضغط هنا
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default Register;
