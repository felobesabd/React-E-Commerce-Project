import { useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import {
  ADD_COUPON,
  GET_ALL_COUPONS,
  DELETE_COUPON,
  GET_ONE_COUPONS,
  EDIT_COUPON,
} from "../Type";
import useDeleteData from "./../../Hooks/useDeleteData";

// Add Coupon
export const addCoupon = (body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/coupons`, body);

    dispatch({
      type: ADD_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: ADD_COUPON,
      payload: e.response,
    });
  }
};

// Get All Coupons
export const getAllCoupons = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons`);

    dispatch({
      type: GET_ALL_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_COUPONS,
      payload: e.response,
    });
  }
};

// Get One Coupon
export const getOneCoupons = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/coupons/${id}`);

    dispatch({
      type: GET_ONE_COUPONS,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_COUPONS,
      payload: e.response,
    });
  }
};

// Delete Coupons
export const deleteCoupon = (ID) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/coupons/${ID}`);

    dispatch({
      type: DELETE_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: DELETE_COUPON,
      payload: e.response,
    });
  }
};

// Edit Coupon
export const editCoupon = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/coupons/${id}`, body);
    console.log(response);
    dispatch({
      type: EDIT_COUPON,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: EDIT_COUPON,
      payload: e.response,
    });
  }
};
