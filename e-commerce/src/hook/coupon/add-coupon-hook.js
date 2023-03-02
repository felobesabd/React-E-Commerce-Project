import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCoupon, getAllCoupons } from "./../../Redux/Actions/couponAction";
import notify from "./../useNotifications";

const AddCouponHook = () => {
  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);

  // To Change Coupon Name State
  const onChangeCouponName = (e) => {
    e.persist();
    setCouponName(e.target.value);
  };

  // To Change Coupon Data State
  const onChangeCouponDate = (e) => {
    e.persist();
    setCouponDate(e.target.value);
  };

  // To Save & Change Coupon Value
  const onChangeCouponValue = (e) => {
    e.persist();
    setCouponValue(e.target.value);
  };

  const OnSubmit = async () => {
    if (couponName === "" || couponDate === "" || couponValue <= 0) {
      notify("من فضلك اكمل البيانات", "error");
      return;
    }

    setLoading(true);
    await dispatch(
      addCoupon({
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.addCoupon);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res && res.status === 201) {
          notify("تمت إضافة الكوبون بنجاح", "success");
          window.location.reload(false);
        }
        if (res.status === 400) {
          notify("هذا الكوبون موجود بالفعل، برجاء إدخال كوبون جديد", "error");
        }
        if (res.status === 403) {
          notify("غير مسموح باضافة الكوبون", "error");
        }
      }
    }
  }, [loading]);

  const allCoupons = useSelector((state) => state.couponReducer.allCoupons);

  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCoupons());
    };
    get();
  }, []);

  let coupons = [];

  try {
    if (allCoupons && allCoupons.data.length >= 1) {
      coupons = allCoupons.data;
    }
  } catch (e) {}

  return [
    couponName,
    couponDate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    OnSubmit,
    coupons,
  ];
};

export default AddCouponHook;
