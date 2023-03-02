import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCategory,
  getAllCategoryPage,
} from "../../Redux/Actions/categoryAction";
const AllCategoryPageHook = () => {
  const dispatch = useDispatch();

  // When First Load
  useEffect(() => {
    const get = async () => {
      await dispatch(getAllCategory(4));
    };
    get();
  }, []);
  // To Get State From Redux
  const category = useSelector((state) => state.allCategory.category);
  const loading = useSelector((state) => state.allCategory.loading);

  // To Make Value To Pagination before Loading Page Data
  let pageCount = 0;
  try {
    if (category.paginationResult) {
      pageCount = category.paginationResult.numberOfPages;
    }
  } catch (e) {}
  // Getting the current page  When Pressing on Pagination
  const getPage = (page) => {
    dispatch(getAllCategoryPage(page));
  };

  return [category, loading, pageCount, getPage];
};

export default AllCategoryPageHook;
