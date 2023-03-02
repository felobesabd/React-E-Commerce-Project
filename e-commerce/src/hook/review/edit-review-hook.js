import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword, loginUser } from "../../Redux/Actions/authAction";
import notify from "../useNotifications";
import {
  createReview,
  deleteReview,
  editReview,
} from "./../../Redux/Actions/reviewAction";

const EditReviewHook = (review) => {
  const distpatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [showEdit, setShowEdit] = useState(false);

  const [newReviewText, setNewReviewText] = useState(review.review);
  const [newRateValue, setNewRateValue] = useState(review.rating);

  const onChangeReviewText = (e) => {
    setNewReviewText(e.target.value);
  };

  const onChangeRateValue = (val) => {
    setNewRateValue(val);
  };

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleEdit = async () => {
    setLoading(true);
    await distpatch(
      editReview(review._id, {
        review: newReviewText,
        rating: newRateValue,
      })
    );
    setLoading(false);
    handleCloseEdit();
  };

  const res = useSelector((state) => state.reviewReducer.editReview);

  useEffect(() => {
    if (loading === false) {
      console.log(res);
      if (res.status && res.status === 200) {
        notify("تمت التعديل بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 100);
      } else {
        notify("هناك مشكلة في عملية التعديل", "error");
      }
    }
  }, [loading]);

  return [
    showEdit,
    handleCloseEdit,
    handleEdit,
    handleShowEdit,
    onChangeReviewText,
    newReviewText,
    onChangeRateValue,
    newRateValue,
  ];
};

export default EditReviewHook;
