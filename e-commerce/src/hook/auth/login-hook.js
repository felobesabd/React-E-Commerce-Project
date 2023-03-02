import React, { useState, useEffect } from "react";
import notify from "../useNotifications";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Redux/Actions/authAction";

const LoginHook = () => {
  const distpatch = useDispatch();
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const OnSubmit = async () => {
    setIsPress(true);
    setLoading(true);
    await distpatch(
      loginUser({
        email,
        password,
      })
    );
    setLoading(false);
    setIsPress(false);
  };

  const res = useSelector((state) => state.authReducer.loginUser);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res.data);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          notify("تم تسجيل الدخول بنجاح", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1500);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }

        if (res.data.message === "Incorrect email or password") {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify("هناك خطأ في الايميل او كلمة السر", "error");
        }

        setLoading(true);
      }
    }
  }, [loading]);

  return [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    OnSubmit,
    isPress,
  ];
};

export default LoginHook;
