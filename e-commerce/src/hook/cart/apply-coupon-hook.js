import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotifications";
import { useNavigate } from "react-router-dom";
import {
  addProductToCart,
  applyCouponOnCart,
} from "./../../Redux/Actions/cartAction";

const ApplyCouponHook = (cartItems) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [couponName, setCouponName] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCoupon = (e) => {
    setCouponName(e);
  };

  const handleSubmitCoupon = async () => {
    if (couponName === "") {
      notify("من فضلك ادخل الكوبون", "warn");
      return;
    }

    setLoading(true);
    await dispatch(
      applyCouponOnCart({
        couponName: couponName,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.applyCouponOnCart);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
      }
      if (res && res.status === 200) {
        notify("تم تطبيق الكوبون بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else {
        notify("هذا الكوبون غير صحيح او منتهي الصلاحية", "warn");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [loading]);

  const handleCheckout = () => {
    if (cartItems.length >= 1) {
      navigate("/order/paymenthoud");
    } else {
      notify("من فضلك اضف منتج للعربة اولا", "warn");
    }
  };

  return [couponName, onChangeCoupon, handleSubmitCoupon, handleCheckout];
};

export default ApplyCouponHook;
