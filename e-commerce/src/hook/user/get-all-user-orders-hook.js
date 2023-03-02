import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "./../../Redux/Actions/orderAction";

const GetAllUserOrdersHook = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(0);
  const [pagination, setPagination] = useState({});
  const [orderData, setOrderData] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  let userName = "";
  if (user != null) {
    userName = user.name;
  }

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllOrders(5, ""));
      setLoading(false);
    };
    get();
  }, []);

  const OnPress = async (page) => {
    setLoading(true);
    await dispatch(getAllOrders(5, page));
    setLoading(false);
  };

  const resAllOrders = useSelector((state) => state.orderReducer.getAllOrders);

  useEffect(() => {
    if (loading === false) {
      if (resAllOrders.results) {
        setResults(resAllOrders.results);
        if (resAllOrders.paginationResult) {
          setPagination(resAllOrders.paginationResult);
        }
        if (resAllOrders.paginationResult) {
          setPagination(resAllOrders.paginationResult);
        }
        if (resAllOrders.data) {
          setOrderData(resAllOrders.data);
        }
      }
    }
  }, [loading]);

  return [userName, results, pagination, orderData, OnPress];
};

export default GetAllUserOrdersHook;
