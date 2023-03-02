import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword, loginUser } from "../../Redux/Actions/authAction";
import notify from "../useNotifications";

const ForgetPasswordHook = () => {
  const distpatch = useDispatch();
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const OnSubmit = async () => {
    if (email === "") {
      notify("من فضلك ادخل الايميل", "error");
      return;
    }
    localStorage.setItem("user-email", email);
    setLoading(true);
    await distpatch(forgetPassword({ email }));
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.forgetPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("تم ارسال الكود الي الايميل بنجاح", "success");
          setTimeout(() => {
            navigation("/user/verify-code");
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("برجاء التأكد من البريد الالكتروني", "error");
        }
      }
    }
  }, [loading]);

  return [onChangeEmail, email, OnSubmit];
};

export default ForgetPasswordHook;
