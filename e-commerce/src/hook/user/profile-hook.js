import React, { useState, useEffect } from "react";
import {
  updateUserProfileData,
  updateUserProfilePassword,
} from "./../../Redux/Actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import notify from "../useNotifications";
import { useNavigate } from "react-router-dom";

const ProfileHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   console.log(JSON.parse(localStorage.getItem("user")));
  let user = [];
  if (JSON.parse(localStorage.getItem("user")) != null) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [loading, setLoading] = useState(true);

  // To Add User Alias
  const onChangeName = (e) => {
    e.persist();
    setName(e.target.value);
  };

  // To Add User Specific Adress
  const onChangeEmail = (e) => {
    e.persist();
    setEmail(e.target.value);
  };

  // To Add User Phone
  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  let body = {};
  if (user.email === email) {
    body = {
      name: name,
      phone: phone,
    };
  } else {
    body = {
      name: name,
      email: email,
      phone: phone,
    };
  }

  const handleSubmit = async () => {
    setLoading(true);
    await dispatch(updateUserProfileData(body));
    setLoading(false);
    setShow(false);
    // window.location.reload(false);
  };

  const res = useSelector((state) => state.authReducer.userProfile);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تم تعديل البيانات بنجاح", "success");
        localStorage.setItem("user", JSON.stringify(res.data.data.user));
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else if (res.data.errors[0].msg === "E-mail already in use") {
        notify("هذا الايميل مستخدم من قبل، برجاء تغيير الايميل", "warn");
      } else {
        notify("فشل في عملية تعديل البيانات الشخصية!", "warn");
      }
    }
  }, [loading]);

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [loadingPass, setLoadingPass] = useState(true);

  // To Add User Alias
  const onChangeOldPass = (e) => {
    e.persist();
    setOldPass(e.target.value);
  };

  // To Add User Specific Adress
  const onChangeNewPass = (e) => {
    e.persist();
    setNewPass(e.target.value);
  };

  // To Add User Phone
  const onChangeConfirmNewPass = (e) => {
    e.persist();
    setConfirmNewPass(e.target.value);
  };

  const changePassword = async () => {
    if (confirmNewPass != newPass) {
      notify("برجاء التأكد من تطابق كلمة السر", "warn");
      return;
    }
    setLoadingPass(true);
    await dispatch(
      updateUserProfilePassword({
        currentPassword: oldPass,
        password: newPass,
        passwordConfirm: confirmNewPass,
      })
    );
    setLoadingPass(false);
  };

  const resPass = useSelector((state) => state.authReducer.userUpdatePassword);

  useEffect(() => {
    if (loadingPass === false) {
      console.log(resPass);
      if (resPass && resPass.status === 200) {
        notify("تم تغيير كلمة المرور بنجاح", "success");
        setTimeout(() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          navigate("/login");
          window.location.reload(false);
        }, 2000);
      } else {
        notify("فشل في تغيير كلمة المرور", "warn");
      }
    }
  }, [loadingPass]);

  return [
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
  ];
};

export default ProfileHook;
