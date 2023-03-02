import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { verifyPassword } from "../../Redux/Actions/authAction";
import notify from "../useNotifications";

const VerifyPasswordHook = () => {
  const distpatch = useDispatch();
  const navigation = useNavigate();

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const OnSubmit = async () => {
    if (code === "") {
      notify("من فضلك ادخل الكود", "error");
      return;
    }
    setLoading(true);
    await distpatch(
      verifyPassword({
        resetCode: code,
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
          notify("تم تفعيل الكود بنجاح", "success");
          setTimeout(() => {
            navigation("/user/reset-password");
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("خطأ في الكود او انتهاء صلاحيته", "error");
        }
      }
    }
  }, [loading]);

  return [onChangeCode, code, OnSubmit];
};

export default VerifyPasswordHook;
