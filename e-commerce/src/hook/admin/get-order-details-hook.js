import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders, getOneOrder } from "./../../Redux/Actions/orderAction";

const GetOrderDetailsHook = (id) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getOneOrder(id));
      setLoading(false);
    };
    get();
  }, []);

  const resOneOrder = useSelector((state) => state.orderReducer.getOneOrder);

  useEffect(() => {
    if (loading === false) {
      if (resOneOrder.data) {
        setOrderData(resOneOrder.data);
      }
      if (resOneOrder.data.cartItems) {
        setCartItems(resOneOrder.data.cartItems);
      }
    }
  }, [loading]);

  return [orderData, cartItems];
};

export default GetOrderDetailsHook;
