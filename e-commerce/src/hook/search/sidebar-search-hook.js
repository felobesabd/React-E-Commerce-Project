import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../Redux/Actions/categoryAction";
import { getAllBrands } from "./../../Redux/Actions/brandAction";
import ViewSearchProductsHook from "./../products/view-search-products-hook";

const SidebarSearchHook = () => {
  const [items, pagination, onPress, getProduct, results] =
    ViewSearchProductsHook();

  const dispatch = useDispatch();

  // When First Load
  useEffect(() => {
    const runAll = async () => {
      await dispatch(getAllCategory());
      await dispatch(getAllBrands());
    };
    runAll();
  }, []);
  // To Get State From Redux
  const allCat = useSelector((state) => state.allCategory.category);
  const allBrand = useSelector((state) => state.allBrands.brand);

  let category = [];
  try {
    if (allCat.data) {
      category = allCat.data;
    }
  } catch (e) {}

  let brand = [];
  try {
    if (allBrand.data) {
      brand = allBrand.data;
    }
  } catch (e) {}

  var queryCat = "";
  //To Have All Checked Category
  const [catChecked, setCatChecked] = useState([]);
  // When user Press on any Category on Sidebar
  const clickCategory = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCatChecked([]);
    } else {
      if (e.target.checked === true) {
        setCatChecked([...catChecked, value]);
      } else if (e.target.checked === false) {
        const onlyChecked = catChecked.filter((e) => e !== value);
        setCatChecked(onlyChecked);
      }
    }
  };

  useEffect(() => {
    queryCat = catChecked.map((val) => "category[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryCat);
    setTimeout(() => {
      getProduct();
    }, 500);
  }, [catChecked]);

  var queryBrand = "";
  //To Have All Checked Brand
  const [brandChecked, setBrandChecked] = useState([]);
  // When user Press on any Brand on Sidebar
  const clickBrand = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandChecked([]);
    } else {
      if (e.target.checked === true) {
        setBrandChecked([...brandChecked, value]);
      } else if (e.target.checked === false) {
        const onlyChecked = brandChecked.filter((e) => e !== value);
        setBrandChecked(onlyChecked);
      }
    }
  };

  useEffect(() => {
    queryBrand = brandChecked.map((val) => "brand[in][]=" + val).join("&");
    localStorage.setItem("catChecked", queryBrand);
    setTimeout(() => {
      getProduct();
    }, 500);
  }, [brandChecked]);

  const [pFrom, setpFrom] = useState(0);
  const [pTo, setpTo] = useState(0);

  const priceFrom = (e) => {
    localStorage.setItem("priceFrom", e.target.value);
    setpFrom(e.target.value);
  };
  const priceTo = (e) => {
    localStorage.setItem("priceTo", e.target.value);
    setpTo(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 500);
  }, [pFrom, pTo]);

  return [category, brand, clickCategory, clickBrand, priceFrom, priceTo];
};

export default SidebarSearchHook;
