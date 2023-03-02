import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import notify from "../useNotifications";
import { addProductToCart } from "./../../Redux/Actions/cartAction";

const AddToCartHook = (prodID, item) => {
  const dispatch = useDispatch();

  const [colorIndex, setColorIndex] = useState("");
  const [colorHex, setColorHex] = useState("");
  const [loading, setLoading] = useState(true);

  const onColorClicked = (index, color) => {
    setColorIndex(index);
    // console.log(index);
    setColorHex(color);
    // console.log(color);
  };

  //Add Product To Cart
  const addToCartHandle = async () => {
    // console.log(item.availableColors);
    if (item.availableColors.length >= 1) {
      if (colorHex === "") {
        notify("من فضلك أختر لون أولاً", "warn");
        return;
      }
    } else {
      setColorHex("");
    }
    setLoading(true);
    await dispatch(
      addProductToCart({
        productId: prodID,
        color: colorHex,
      })
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.cartReducer.addProductToCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("تمت إضافة المنتج للعربه بنجاح", "success");
        setTimeout(() => {
          window.location.reload(false);
        }, 1500);
      } else {
        notify("قم بتسجيل الدخول أولاً", "warn");
      }
    }
  }, [loading]);

  return [colorIndex, onColorClicked, addToCartHandle];
};

export default AddToCartHook;
