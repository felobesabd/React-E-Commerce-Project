import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/auth/login-hook";
import { ToastContainer } from "react-toastify";
const LoginPage = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    OnSubmit,
    isPress,
  ] = LoginHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" className=" d-flex flex-column">
          <label className="mx-auto title-login">تسجيل الدخول</label>
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
          <button onClick={OnSubmit} className="btn-login mx-auto mt-4">
            تسجيل الدخول
          </button>
          <label className="mx-auto my-4">
            ليس لديك حساب ؟
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span
                style={{ cursor: "pointer", fontWeight: "bold" }}
                className="text-danger"
              >
                إضغط هنا
              </span>
            </Link>
          </label>

          <label className="mx-auto my-4">
            <Link
              to="/user/forget-password"
              style={{ textDecoration: "none", fontWeight: "bold" }}
            >
              هل نسيت كلمة السر؟
            </Link>
          </label>
        </Col>
        {/* <label className="mx-auto my-4">
          <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
            <span
              style={{ cursor: "pointer", fontWeight: "bold" }}
              className="text-danger"
            >
              الدخول أدمن
            </span>
          </Link>
          <Link to="/user/allorders" style={{ textDecoration: "none" }}>
            <span
              style={{ cursor: "pointer", fontWeight: "bold" }}
              className="text-danger d-block"
            >
              الدخول مستخدم
            </span>
          </Link>
        </label>
        {isPress === true ? (
          loading === true ? (
            <Spinner animation="border" role="status"></Spinner>
          ) : null
        ) : null} */}
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
