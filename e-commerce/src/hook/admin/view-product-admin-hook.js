import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";
import { getAllProductsPage } from "./../../Redux/Actions/productAction";

const ViewProductAdminHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(9));
  }, []);
  const allproducts = useSelector((state) => state.allProducts.allproducts);

  const onPress = async (page) => {
    await dispatch(getAllProductsPage(9, page));
  };

  let items = [];
  let pagination = [];

  try {
    if (allproducts.data) {
      items = allproducts.data;
    } else {
      items = [];
    }

    if (allproducts.paginationResult) {
      pagination = allproducts.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}

  return [items, pagination, onPress];
};

export default ViewProductAdminHook;
