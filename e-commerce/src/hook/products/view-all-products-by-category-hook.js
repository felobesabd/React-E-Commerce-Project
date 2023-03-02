import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductaByCategory } from "./../../Redux/Actions/productAction";

const ViewAllProductsByCategoryHook = (catID) => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    await dispatch(getAllProductaByCategory(limit, "", catID));
  };

  useEffect(() => {
    getProduct("");
  }, []);

  // When Changing Pagination Depending on Search Results
  const onPress = async (page) => {
    await dispatch(getAllProductaByCategory(limit, page, catID));
  };

  const allproducts = useSelector(
    (state) => state.allProducts.getAllProductaByCategory
  );

  let items = [];
  let pagination = [];
  let results = 0;

  try {
    if (allproducts.data) {
      items = allproducts.data;
    } else {
      items = [];
    }
  } catch (e) {}

  try {
    if (allproducts.paginationResult) {
      pagination = allproducts.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}

  return [items, pagination, onPress];
};

export default ViewAllProductsByCategoryHook;
