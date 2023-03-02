import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ProductCard from "./../Products/ProductCard";
import Pagination from "./../Utilities/Pagination";
import CardProductsContainer from "./../Products/CardProductsContainer";
import { useDispatch, useSelector } from "react-redux";
import { getProductWishList } from "./../../Redux/Actions/wishListAction";

const UserFavouriteProduct = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(getProductWishList());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((state) => state.addToWishListReducer.allWishlist);

  useEffect(() => {
    try {
      if (loading === false) {
        if (res) {
          console.log(res);
          setItems(res.data);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, [loading]);

  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المنتجات المفضلة</div>
      <Row className="justify-content-start">
        {items.length <= 0 ? (
          <h5 className="text-center">لا توجد منتجات مفضلة</h5>
        ) : (
          <CardProductsContainer product={items} />
        )}
      </Row>
    </div>
  );
};

export default UserFavouriteProduct;
