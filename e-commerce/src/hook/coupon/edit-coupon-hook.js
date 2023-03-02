import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCoupon,
  editCoupon,
  getOneCoupons,
} from "./../../Redux/Actions/couponAction";
import notify from "./../useNotifications";
import { useNavigate } from "react-router-dom";

const EditCouponHook = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [couponName, setCouponName] = useState("");
  const [couponDate, setCouponDate] = useState("");
  const [couponValue, setCouponValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(true);

  const onCoupon = useSelector((state) => state.couponReducer.oneCoupon);

  useEffect(() => {
    const get = async () => {
      setLoadingData(true);
      await dispatch(getOneCoupons(id));
      setLoadingData(false);
    };
    get();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    if (loadingData === false) {
      if (onCoupon.data) {
        setCouponName(onCoupon.data.name);
        // formatDate(onCoupon.data.expire)
        setCouponDate(formatDate(onCoupon.data.expire));
        setCouponValue(onCoupon.data.discount);
      }
    }
  }, [loadingData]);

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
      editCoupon(id, {
        name: couponName,
        expire: couponDate,
        discount: couponValue,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.couponReducer.editCoupon);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res && res.status === 200) {
          notify("تم تعديل الكوبون بنجاح", "success");
          setTimeout(() => {
            navigate("/admin/addcoupon");
          }, 1500);
        } else {
          notify("فشل في تعديل الكوبون!", "error");
        }
      }
    }
  }, [loading]);

  return [
    couponName,
    couponDate,
    couponValue,
    onChangeCouponName,
    onChangeCouponDate,
    onChangeCouponValue,
    OnSubmit,
  ];
};

export default EditCouponHook;
