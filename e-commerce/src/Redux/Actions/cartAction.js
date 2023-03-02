import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_USER_CART_ITEMS,
  CLEAR_ALL_USER_CART_ITEMS,
  DELETE_ONE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
  APPLY_COUPON_ON_CART,
} from "../Type";
import { useGetData, useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import useDeleteData from "./../../Hooks/useDeleteData";
import { useUpdateData } from "./../../Hooks/useUpdateData";

// Add To Cart
export const addProductToCart = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/cart`, body);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: e.response,
    });
  }
};

// Get All Cart Items
export const getAllUserCartItems = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/cart`);
    dispatch({
      type: GET_ALL_USER_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_USER_CART_ITEMS,
      payload: e.response,
    });
  }
};

// Clear All Cart Items
export const clearAllCartItem = () => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart`);
    dispatch({
      type: CLEAR_ALL_USER_CART_ITEMS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CLEAR_ALL_USER_CART_ITEMS,
      payload: e.response,
    });
  }
};

// Delete One Cart Item
export const deleteOneCartItem = (ID) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/cart/${ID}`);
    dispatch({
      type: DELETE_ONE_CART_ITEM,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_ONE_CART_ITEM,
      payload: e.response,
    });
  }
};

// Update Cart Item Quantity
export const updateCartItemQuantity = (ID, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/${ID}`, body);
    dispatch({
      type: UPDATE_CART_ITEM_QUANTITY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_CART_ITEM_QUANTITY,
      payload: e.response,
    });
  }
};

// Apply Coupon on Cart Item
export const applyCouponOnCart = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/cart/applyCoupon`, body);
    console.log(response);
    dispatch({
      type: APPLY_COUPON_ON_CART,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: APPLY_COUPON_ON_CART,
      payload: e.response,
    });
  }
};
