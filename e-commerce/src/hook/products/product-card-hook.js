import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import favoff from "../../images/fav-off.png";
import favon from "../../images/fav-on.png";
import prod1 from "../../images/prod1.png";
import {
  addProductToWishList,
  removeProductFromWishList,
} from "./../../Redux/Actions/wishListAction";
import notify from "../../hook/useNotifications";

const ProductCardHook = (item, favProd) => {
  const dispatch = useDispatch();
  const [favImg, setFavImg] = useState(favoff);

  let Fav = favProd.some((fitem) => fitem === item._id);
  const [isFav, setIsFav] = useState(Fav);
  // const [loading, setLoading] = useState(true);
  const [loadingRemove, setLoadingRemove] = useState(true);
  const [loadingAdd, setLoadingAdd] = useState(true);

  useEffect(() => {
    setIsFav(favProd.some((fitem) => fitem === item._id));
  }, [favProd]);

  const handleFav = () => {
    if (isFav) {
      removeProductFromWishListData();
    } else {
      addProductToWishListData();
    }
  };

  useEffect(() => {
    if (isFav === true) {
      setFavImg(favon);
    } else {
      setFavImg(favoff);
    }
  }, [isFav]);

  const resAdd = useSelector((state) => state.addToWishListReducer.addWishList);
  const resRemove = useSelector(
    (state) => state.addToWishListReducer.removeWishList
  );

  const addProductToWishListData = async () => {
    setIsFav(true);
    setFavImg(favon);
    setLoadingAdd(true);
    await dispatch(
      addProductToWishList({
        productId: item._id,
      })
    );
    setLoadingAdd(false);
  };

  const removeProductFromWishListData = async () => {
    setIsFav(false);
    setFavImg(favoff);
    setLoadingRemove(true);
    await dispatch(removeProductFromWishList(item._id));
    setLoadingRemove(false);
  };

  useEffect(() => {
    if (loadingAdd === false) {
      if (resAdd && resAdd.status === 200) {
        notify("تمت اضافة المنتج للمفضلة بنجاح", "success");
      } else if (resAdd && resAdd.status === 401) {
        notify("انت غير مسجل لتقوم بهذه العملية", "error");
      }
    }
  }, [loadingAdd]);

  useEffect(() => {
    if (loadingRemove === false) {
      if (resRemove && resRemove.status === "success") {
        notify("تمت حذف المنتج من المفضلة بنجاح", "warn");
      } else if (resAdd && resAdd.status === 401) {
        notify("انت غير مسجل لتقوم بهذه العملية", "error");
      }
    }
  }, [loadingRemove]);

  return [
    removeProductFromWishListData,
    addProductToWishListData,
    handleFav,
    favImg,
  ];
};

export default ProductCardHook;
