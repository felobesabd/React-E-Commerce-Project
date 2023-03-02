import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editUserAddress,
  getSpecificUserAddress,
} from "./../../Redux/Actions/userAddressAction";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifications";

const EditAddressHook = (id) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingEdit, setLoadingEdit] = useState(true);

  // To Add User Alias
  const onChangeAlias = (e) => {
    e.persist();
    setAlias(e.target.value);
  };

  // To Add User Specific Adress
  const onChangeDetails = (e) => {
    e.persist();
    setDetails(e.target.value);
  };

  // To Add User Phone
  const onChangePhone = (e) => {
    e.persist();
    setPhone(e.target.value);
  };

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getSpecificUserAddress(id));
      setLoading(false);
    };
    get();
  }, []);

  const resAddress = useSelector(
    (state) => state.userAddressReducer.getSpecificUserAddress
  );

  useEffect(() => {
    if (loading === false) {
      if (resAddress && resAddress.status === "success") {
        setAlias(resAddress.data.alias);
        setDetails(resAddress.data.details);
        setPhone(resAddress.data.phone);
      }
    }
  }, [loading]);

  const handleEdit = async () => {
    setLoadingEdit(true);
    await dispatch(
      editUserAddress(id, {
        alias: alias,
        details: details,
        phone: phone,
      })
    );
    setLoadingEdit(false);
  };

  const resEdit = useSelector(
    (state) => state.userAddressReducer.editUserAddress
  );

  useEffect(() => {
    if (loadingEdit === false) {
      if (resEdit && resEdit.status === 200) {
        // console.log(resEdit);
        notify("تمت عملية التعديل على العنوان بنجاح", "success");
        setTimeout(() => {
          navigate("/user/addresses");
        }, 2000);
      } else {
        notify("فشل في عملية الاضافة", "error");
      }
    }
  }, [loadingEdit]);

  return [
    handleEdit,
    alias,
    details,
    phone,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
  ];
};
export default EditAddressHook;
