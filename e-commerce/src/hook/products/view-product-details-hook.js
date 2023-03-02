import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOneProduct,
  getSimilarProducts,
} from "../../Redux/Actions/productAction";
import mobile from "../../images/mobile.png";
import { getOneCategory } from "../../Redux/Actions/categoryAction";
import { getOneBrand } from "../../Redux/Actions/brandAction";
const ViewProductDetailsHook = (prodID) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneProduct(prodID));
  }, []);

  const oneProduct = useSelector((state) => state.allProducts.oneProduct);

  const oneCategory = useSelector((state) => state.allCategory.oneCategory);

  const oneBrand = useSelector((state) => state.allBrands.oneBrand);

  const similarProducts = useSelector(
    (state) => state.allProducts.similarProducts
  );

  // To Show Product Item
  let item = [];
  if (oneProduct.data) {
    item = oneProduct.data;
  } else {
    item = [];
  }

  useEffect(() => {
    if (item.category) {
      dispatch(getOneCategory(item.category));
    }
    if (item.brand) {
      dispatch(getOneBrand(item.brand));
    }
    if (item.category) {
      dispatch(getSimilarProducts(item.category));
    }
  }, [item]);

  //To View Images Gallery
  let images = [];
  if (item.images)
    images = item.images.map((img) => {
      return { original: img };
    });
  else {
    images = [{ original: `${mobile}` }];
  }

  // To Show Category Item
  let cat = [];
  if (oneCategory.data) {
    cat = oneCategory.data;
  } else {
    cat = [];
  }
  // To Show Product Brand
  let brand = [];
  if (oneBrand.data) {
    brand = oneBrand.data;
  } else {
    brand = [];
  }

  // To Show Similar Products
  let simProds = [];
  if (similarProducts) {
    simProds = similarProducts.data;
  } else {
    simProds = [];
  }

  return [item, images, cat, brand, simProds];
};

export default ViewProductDetailsHook;
