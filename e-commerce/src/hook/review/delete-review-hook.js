import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgetPassword, loginUser } from "../../Redux/Actions/authAction";
import notify from "../useNotifications";
import { createReview, deleteReview } from "./../../Redux/Actions/reviewAction";

const DeleteReviewHook = (review) => {
  const dispatch = useDispatch();

  const [isUser, setIsUser] = useState(false);
  const [loading, setLoading] = useState(true);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    try {
      if (review.user._id === user._id) {
        setIsUser(true);
      }
    } catch (e) {}
  }, []);

  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  const handleDelete = async () => {
    setLoading(true);
    await dispatch(deleteReview(review._id));
    setLoading(false);
    handleClose();
  };

  const res = useSelector((state) => state.reviewReducer.deleteReview);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تمت الازالة بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 100);
      } else {
        notify("هناك مشكلة في عملية البحث", "error");
      }
    }
  }, [loading]);

  return [isUser, handleDelete, handleClose, handleShow, showDelete];
};

export default DeleteReviewHook;
