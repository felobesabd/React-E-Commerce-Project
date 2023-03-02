import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteOneCartItem,
  getAllUserCartItems,
} from "../../Redux/Actions/cartAction";
import notify from "../useNotifications";
import { clearAllCartItem } from "./../../Redux/Actions/cartAction";

const DeleteCartHook = (item) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => setShowDelete(false);
  const handleShow = () => setShowDelete(true);

  //   To Delete All Cart Item
  const handleDeleteCart = async () => {
    setLoading(true);
    await dispatch(clearAllCartItem());
    setLoading(false);
    handleClose();
  };

  //   To Delete a Specific Cart Item
  const handleDeleteSpecificItem = async () => {
    await dispatch(deleteOneCartItem(item._id));
    setShowDelete(false);
    notify("تم حذف المنتج من العربة بنجاح", "success");
    setTimeout(() => {
      window.location.reload(false);
    }, 1500);
  };

  const res = useSelector((state) => state.cartReducer.clearCartItems);

  useEffect(() => {
    if (loading === false) {
      if (res === "") {
        notify("تم تفريغ العربة بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else {
      }
    }
  }, [loading]);

  return [
    handleDeleteCart,
    handleDeleteSpecificItem,
    handleClose,
    handleShow,
    showDelete,
  ];
};

export default DeleteCartHook;
