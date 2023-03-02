import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBrands,
  getAllBrandsPage,
} from "../../Redux/Actions/brandAction";
const AllBrandPageHook = () => {
  const dispatch = useDispatch();

  // When First Load
  useEffect(() => {
    dispatch(getAllBrands(5));
  }, []);
  // To Get State From Redux
  const brand = useSelector((state) => state.allBrands.brand);
  const loading = useSelector((state) => state.allBrands.loading);

  // To Make Value To Pagination before Loading Page Data
  let pageCount = 0;
  if (brand.paginationResult) {
    pageCount = brand.paginationResult.numberOfPages;
  }
  // Getting the current page  When Pressing on Pagination
  const getPage = (page) => {
    dispatch(getAllBrandsPage(page));
  };

  return [brand, loading, pageCount, getPage];
};

export default AllBrandPageHook;
