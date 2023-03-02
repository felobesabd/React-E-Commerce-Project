import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductaByBrand } from "../../Redux/Actions/productAction";

const ViewAllProductByBrandHook = (brandID) => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    await dispatch(getAllProductaByBrand(limit, "", brandID));
  };

  useEffect(() => {
    getProduct("");
  }, []);

  // When Changing Pagination Depending on Search Results
  const onPress = async (page) => {
    await dispatch(getAllProductaByBrand(limit, page, brandID));
  };

  const allBrands = useSelector(
    (state) => state.allProducts.getAllProductaByBrand
  );

  let items = [];
  let pagination = [];
  let results = 0;

  try {
    if (allBrands.data) {
      items = allBrands.data;
    } else {
      items = [];
    }
  } catch (e) {}

  try {
    if (allBrands.paginationResult) {
      pagination = allBrands.paginationResult.numberOfPages;
    } else {
      pagination = [];
    }
  } catch (e) {}

  return [items, pagination, onPress];
};

export default ViewAllProductByBrandHook;
