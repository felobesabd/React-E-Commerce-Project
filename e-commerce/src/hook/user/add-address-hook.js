import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "./../useNotifications";
import { addUserAddress } from "./../../Redux/Actions/userAddressAction";
import { useNavigate } from "react-router-dom";

const AddAddressHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(true);

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

  const OnSubmit = async () => {
    if (alias === "" || details === "" || phone === "") {
      notify("من فضلك اكمل البيانات", "error");
      return;
    }

    setLoading(true);
    await dispatch(
      addUserAddress({
        alias: alias,
        details: details,
        phone: phone,
        city: "",
        postalCode: "",
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.userAddressReducer.addUserAddress);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res && res.status === 200) {
          notify("تمت إضافة العنوان بنجاح", "success");
          setTimeout(() => {
            navigate("/user/addresses");
          }, 1500);
          //   window.location.reload(false);
        } else {
          notify("هناك مشكلة في عملية اضافة العنوان", "error");
        }
      }
    }
  }, [loading]);

  return [
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    alias,
    details,
    phone,
    OnSubmit,
  ];
};

export default AddAddressHook;
