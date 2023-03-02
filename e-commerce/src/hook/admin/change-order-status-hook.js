import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeOrderDeliver,
  changeOrderPay,
  getAllOrders,
  getOneOrder,
} from "./../../Redux/Actions/orderAction";
import notify from "../useNotifications";

const ChangeOrderStatusHook = (id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [loadingDeliver, setLoadingDeliver] = useState(true);
  const [pay, setPay] = useState(0);
  const [deliver, setDeliver] = useState(0);

  const onChangePayOrder = async () => {
    if (pay === "true") {
      setLoading(true);
      await dispatch(changeOrderPay(id));
      setLoading(false);
    } else if (pay === "0") {
      notify("من فضلك أختر قيمة الدفع", "warn");
    }
  };

  const onChangeDeliverOrder = async () => {
    if (deliver === "true") {
      setLoadingDeliver(true);
      await dispatch(changeOrderDeliver(id));
      setLoadingDeliver(false);
    } else if (deliver === "0") {
      notify("من فضلك أختر قيمة الدفع", "warn");
    }
  };

  // Get Order Deliver Changes

  const resDeliverOrder = useSelector(
    (state) => state.orderReducer.changeDeliver
  );

  useEffect(() => {
    if (loadingDeliver === false) {
      if (resDeliverOrder && resDeliverOrder.status === 200) {
        notify("تم تغيير حالة التوصيل بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else {
        notify("هناك مشكلة في تغيير حالة الطلب", "error");
      }
      console.log(resOneOrder);
    }
  }, [loadingDeliver]);

  // Get Order Payment Changes

  const resOneOrder = useSelector((state) => state.orderReducer.changePay);

  useEffect(() => {
    if (loading === false) {
      if (resOneOrder && resOneOrder.status === 200) {
        notify("تم تغيير حالة الدفع بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else {
        notify("هناك مشكلة في تغيير حالة الطلب", "error");
      }
      console.log(resOneOrder);
    }
  }, [loading]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const onChangePayment = (e) => {
    setPay(e.target.value);
    console.log(e.target.value);
  };

  const onChangeDeliver = (e) => {
    setDeliver(e.target.value);
    console.log(e.target.value);
  };

  return [
    pay,
    formatDate,
    onChangePayment,
    onChangePayOrder,
    onChangeDeliver,
    onChangeDeliverOrder,
  ];
};

export default ChangeOrderStatusHook;
