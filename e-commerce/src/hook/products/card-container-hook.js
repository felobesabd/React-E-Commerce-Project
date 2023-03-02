import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "./../../Redux/Actions/wishListAction";
const CardContainerHook = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [favProd, setFavProd] = useState([]);
  const res = useSelector((state) => state.addToWishListReducer.allWishlist);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    try {
      if (loading === false) {
        if (res && res.data) {
          // console.log(res.data.map((item) => item._id));
          setFavProd(res.data.map((item) => item._id));
        }
      }
    } catch (e) {}
  }, [loading]);

  return [favProd];
};

export default CardContainerHook;
