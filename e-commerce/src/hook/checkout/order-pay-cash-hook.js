import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificUserAddress } from "../../Redux/Actions/userAddressAction";
import { useNavigate } from "react-router-dom";
import GetAllUserCartHook from "./../cart/get-all-user-cart-hook";
import notify from "../useNotifications";
import { createOrderCash } from "./../../Redux/Actions/checkoutAction";

const OrderPayCashHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addressDetails, setAddressDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingCreate, setLoadingCreate] = useState(true);

  // console.log(addressDetails);
  const [, , , , , cartID] = GetAllUserCartHook();

  // When Change Address by User
  const handleChooseAddress = (e) => {
    setAddressDetails([]);
    if (e.target.value != "0") {
      get(e.target.value);
    }
  };

  const get = async (id) => {
    setLoading(true);
    await dispatch(getSpecificUserAddress(id));
    setLoading(false);
  };

  //Get Address Details For USER
  const resAddress = useSelector(
    (state) => state.userAddressReducer.getSpecificUserAddress
  );

  useEffect(() => {
    if (loading === false) {
      if (resAddress && resAddress.status === "success") {
        setAddressDetails(resAddress.data);
      } else {
        setAddressDetails([]);
      }
    }
  }, [loading]);

  //When User Click Pay
  const handleCreateOrderCash = async () => {
    if (cartID === "0") {
      notify("من أضف منتج للعربة أولا", "warn");
      return;
    }
    if (addressDetails <= 0) {
      notify("من فضلك اختر عنوان اولا", "warn");
      return;
    }

    setLoadingCreate(true);
    await dispatch(
      createOrderCash(cartID, {
        shippingAddress: {
          details: addressDetails.alias,
          phone: addressDetails.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoadingCreate(false);
  };

  //Get Response For Creating Cash Order
  const resCashOrder = useSelector(
    (state) => state.checkoutReducer.createOrderCash
  );

  useEffect(() => {
    if (loading === false) {
      if (resCashOrder && resCashOrder.status === 201) {
        notify("تم إنشاء الطلب بنجاح", "success");
        setTimeout(() => {
          navigate("/user/allorders");
        }, 2000);
      } else {
        notify("فشل في إكمال الطلب، من فضلك حاول مرة أخرى", "error");
      }
    }
  }, [loadingCreate]);

  return [handleChooseAddress, addressDetails, handleCreateOrderCash];
};

export default OrderPayCashHook;
