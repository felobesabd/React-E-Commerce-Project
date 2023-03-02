import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificUserAddress } from "../../Redux/Actions/userAddressAction";
import { useNavigate } from "react-router-dom";
import GetAllUserCartHook from "./../cart/get-all-user-cart-hook";
import notify from "../useNotifications";
import {
  createOrderCash,
  createOrderVISA,
} from "./../../Redux/Actions/checkoutAction";

const OrderPayVisaHook = (addressDetails) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  //   console.log(addressDetails);
  const [, , , , , cartID] = GetAllUserCartHook();

  //When User Click Pay
  const handleCreateOrderVISA = async () => {
    if (cartID === "0") {
      notify("من أضف منتج للعربة أولا", "warn");
      return;
    }
    if (addressDetails <= 0) {
      notify("من فضلك اختر عنوان اولا", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      createOrderVISA(cartID, {
        shippingAddress: {
          details: addressDetails.alias,
          phone: addressDetails.phone,
          city: "",
          postalCode: "",
        },
      })
    );
    setLoading(false);
  };

  //Get Response For Creating VISA Order
  const resVISAOrder = useSelector(
    (state) => state.checkoutReducer.createOrderVISA
  );

  useEffect(() => {
    if (loading === false) {
      if (resVISAOrder && resVISAOrder.status === "success") {
        // notify("تم إنشاء الطلب بنجاح", "success");
        if (resVISAOrder.session.url) {
          window.open(resVISAOrder.session.url);
        }
      } else {
        notify("فشل في إكمال الطلب، من فضلك حاول مرة أخرى", "error");
      }
    }
  }, [loading]);

  return [handleCreateOrderVISA];
};

export default OrderPayVisaHook;
