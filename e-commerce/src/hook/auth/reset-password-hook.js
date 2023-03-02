import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword, verifyPassword } from "../../Redux/Actions/authAction";
import notify from "../useNotifications";

const ResetPasswordHook = () => {
  const distpatch = useDispatch();
  const navigation = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const OnSubmit = async () => {
    if (password === "") {
      notify("من فضلك ادخل كلمة السر", "error");
      return;
    }
    if (password != confirmPassword) {
      notify("كلمة السر غير متطابقة", "error");
      return;
    }
    setLoading(true);
    await distpatch(
      resetPassword({
        email: localStorage.getItem("user-email"),
        newPassword: password,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "Success") {
          notify("تم تغيير كلمة السر بنجاح", "success");
          setTimeout(() => {
            navigation("/login");
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("من فضلك قم بطلب كود جديد", "error");
        }
      }
    }
  }, [loading]);

  return [
    password,
    confirmPassword,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
  ];
};

export default ResetPasswordHook;
