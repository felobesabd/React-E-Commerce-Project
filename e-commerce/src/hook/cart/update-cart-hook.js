import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotifications";
import { updateCartItemQuantity } from "./../../Redux/Actions/cartAction";

const UpdateCartHook = (item) => {
  const dispatch = useDispatch();
  const [itemCount, setItemCount] = useState(0);

  const onChangeItemCount = (e) => {
    e.persist();
    setItemCount(e.target.value);
  };

  useEffect(() => {
    if (item) {
      setItemCount(item.count);
    }
  }, []);

  const handleUpdateCart = async () => {
    await dispatch(
      updateCartItemQuantity(item._id, {
        count: itemCount,
      })
    );
    window.location.reload(false);
  };

  return [handleUpdateCart, onChangeItemCount, itemCount];
};

export default UpdateCartHook;
