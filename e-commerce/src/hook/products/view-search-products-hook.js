import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getAllProductsSearch,
} from "../../Redux/Actions/productAction";
import { getAllProductsPage } from "./../../Redux/Actions/productAction";

const ViewSearchProductsHook = () => {
  let limit = 8;
  const dispatch = useDispatch();

  const getProduct = async () => {
    getStorage();
    sortData();

    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${querybrand}${priceFromString}${priceToString}`
      )
    );
  };

  useEffect(() => {
    getProduct("");
  }, []);

  const allproducts = useSelector((state) => state.allProducts.allproducts);

  // When Changing Pagination Depending on Search Results
  const onPress = async (page) => {
    getStorage();
    sortData();

    await dispatch(
      getAllProductsSearch(
        `sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${querybrand}${priceFromString}${priceToString}`
      )
    );
  };

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

  try {
    if (allproducts.results) {
      results = allproducts.results;
    } else {
      results = 0;
    }
  } catch (e) {}

  let word = "";
  let queryCat = "";
  let querybrand = "";
  let priceFrom = "";
  let priceTo = "";
  let priceFromString = "";
  let priceToString = "";
  const getStorage = () => {
    if (localStorage.getItem("searchWord") != null) {
      word = localStorage.getItem("searchWord");
    } else {
      word = "";
    }

    if (localStorage.getItem("catChecked") !== null) {
      queryCat = localStorage.getItem("catChecked");
    }

    if (localStorage.getItem("brandChecked") !== null) {
      querybrand = localStorage.getItem("brandChecked");
    }

    if (localStorage.getItem("priceFrom") !== null) {
      priceFrom = localStorage.getItem("priceFrom");
    }

    if (localStorage.getItem("priceTo") !== null) {
      priceTo = localStorage.getItem("priceTo");
    }

    if (priceFrom === "" || priceFrom <= 0) {
      priceFromString = "";
    } else {
      priceFromString = `&price[gte]=${priceFrom}`;
    }

    if (priceTo === "" || priceTo <= 0) {
      priceToString = "";
    } else {
      priceToString = `&price[lte]=${priceTo}`;
    }
  };

  // When User Choosing Sort Type

  let sortType = "";
  let sort;
  const sortData = () => {
    if (localStorage.getItem("sortType") !== null) {
      sortType = localStorage.getItem("sortType");
    } else {
      sortType = "";
    }

    if (sortType === "السعر من الاقل للاعلى") {
      sort = "+price";
    } else if (sortType === "السعر من الاعلى للاقل") {
      sort = "-price";
    } else if (sortType === "") {
      sort = "";
    } else if (sortType === "الاكثر مبيعا") {
      sort = "-sold";
    } else if (sortType === "الاعلى تقييما") {
      sort = "-ratingsQuantity";
    }
  };

  return [items, pagination, onPress, getProduct, results];
};

export default ViewSearchProductsHook;
