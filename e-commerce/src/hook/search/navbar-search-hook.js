import React, { useState, useEffect } from "react";
import ViewSearchProductsHook from "./../products/view-search-products-hook";

const NavbarSearchHook = () => {
  const [items, pagination, onPress, getProduct] = ViewSearchProductsHook();

  const [searchWord, setSearchWord] = useState("");

  // When User Type Word to Search
  const onSearchChange = (e) => {
    localStorage.setItem("searchWord", e.target.value);
    setSearchWord(e.target.value);
    const path = window.location.pathname;
    if (path !== "/products") {
      window.location.href = "/products";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 500);
  }, [searchWord]);

  return [onSearchChange, searchWord];
};

export default NavbarSearchHook;
