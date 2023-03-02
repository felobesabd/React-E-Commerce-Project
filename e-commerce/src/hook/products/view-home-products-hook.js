import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/Actions/productAction";

const ViewHomeProductsHook = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const allproducts = useSelector((state) => state.allProducts.allproducts);

  let items = [];
  try {
    if (allproducts.data) {
      items = allproducts.data.slice(0, 4);
    } else items = [];
  } catch (e) {}

  return [items];
};

export default ViewHomeProductsHook;
