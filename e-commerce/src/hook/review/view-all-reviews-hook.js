import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword, loginUser } from "../../Redux/Actions/authAction";
import notify from "../useNotifications";
import {
  allReviewsProduct,
  createReview,
} from "./../../Redux/Actions/reviewAction";

const ViewAllReviewsHook = (id) => {
  const distpatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const allReviews = useSelector(
    (state) => state.reviewReducer.allReviewsProduct
  );

  useEffect(() => {
    setLoading(true);

    distpatch(allReviewsProduct(id, 1, 5));

    setLoading(false);
  }, []);

  const OnPress = async (page) => {
    await distpatch(allReviewsProduct(id, page, 5));
  };

  return [allReviews, OnPress];
};

export default ViewAllReviewsHook;
