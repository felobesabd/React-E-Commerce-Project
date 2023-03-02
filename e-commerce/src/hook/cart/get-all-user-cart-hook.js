import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { getAllUserCartItems } from "../../Redux/Actions/cartAction";
import notify from "../useNotifications";

const GetAllUserCartHook = () => {
  const dispatch = useDispatch();
  const [itemsNums, setItemsNums] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const [couponNameRes, setCouponName] = useState("");
  const [cartID, setCartID] = useState("0");
  const [totalCartPriceAfterDiscount, setTotalCartPriceAfterDiscount] =
    useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getAllUserCartItems());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.cartReducer.getAllUserCart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === "success") {
        setItemsNums(res.numOfCartItems);
        setCartItems(res.data.products);
        setTotalCartPrice(res.data.totalCartPrice);
        setCartID(res.data._id);
        if (res.data.coupon) {
          setCouponName(res.data.coupon);
        } else {
          setCouponName("");
        }
        if (res.data.totalAfterDiscount) {
          setTotalCartPriceAfterDiscount(res.data.totalAfterDiscount);
        } else {
          setTotalCartPriceAfterDiscount("");
        }
      } else {
        setCartID("0");
        setItemsNums(0);
        setCartItems([]);
        setTotalCartPrice(0);
        setCouponName("");
        setTotalCartPriceAfterDiscount("");
      }
    }
  }, [loading]);

  return [
    itemsNums,
    cartItems,
    totalCartPrice,
    couponNameRes,
    totalCartPriceAfterDiscount,
    cartID,
  ];
};

export default GetAllUserCartHook;
