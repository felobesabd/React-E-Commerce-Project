import React, { useState, useEffect } from "react";
import notify from "../useNotifications";
import { useDispatch, useSelector } from "react-redux";
import { creatNewUser } from "../../Redux/Actions/authAction";
import { useNavigate } from "react-router-dom";

const RegisterHook = () => {
  const distpatch = useDispatch();
  const navigation = useNavigate();

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setname(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("من فضلك ادخل اسم المستخدم", "error");
      return;
    }
    if (email === "") {
      notify("من فضلك ادخل الايميل", "error");
      return;
    }
    if (password != confirmPassword) {
      notify("من فضلك تاكد من كلمة السر ", "error");
      return;
    }
    if (phone.length <= 10) {
      notify("من فضلك ادخل هاتف صحيح", "error");
      return;
    }
  };

  const res = useSelector((state) => state.authReducer.createUser);

  // To Save Data
  const OnSubmit = async () => {
    validationValues();

    setLoading(true);
    await distpatch(
      creatNewUser({
        name,
        email,
        password,
        passwordConfirm: confirmPassword,
        phone,
      })
    );
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          notify("تم انشاء حساب جديد بنجاح", "success");
          setTimeout(() => {
            navigation("/login");
          }, 2000);
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "must be at least 3 chars") {
            notify("يجب ان لا يقل الاسم عن 3 حروف", "error");
          }
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "E-mail already in use") {
            notify("هذا الايميل مسجل من قبل", "error");
          }
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "must be at least 6 chars") {
            notify("يجب ان لا تقل كلمة السر عن 6 حروف او ارقام", "error");
          }
        }
        if (res.data.errors) {
          if (res.data.errors[0].msg === "accept only egypt phone numbers") {
            notify("برجاء ادخال رقم مصري مكون من 11 رقم", "error");
          }
        }
      }
    }
  }, [loading]);

  return [
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
  ];
};

export default RegisterHook;
