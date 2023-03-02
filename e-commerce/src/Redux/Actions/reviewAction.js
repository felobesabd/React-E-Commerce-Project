import {
  CREATE_REVIEW,
  ALL_REVIEWS_PRODUCT,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "../Type";
import { useGetData, useGetDataToken } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";
import useDeleteData from "../../Hooks/useDeleteData";
import { useUpdateData } from "../../Hooks/useUpdateData";

// Create Review

export const createReview = (prodID, body) => async (dispatch) => {
  try {
    const response = await useInsertData(
      `/api/v1/products/${prodID}/reviews`,
      body
    );

    dispatch({
      type: CREATE_REVIEW,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_REVIEW,
      payload: e.response,
    });
  }
};

// Get All Reviews To ONE Product

export const allReviewsProduct = (prodID, page, limit) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`
    );

    dispatch({
      type: ALL_REVIEWS_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: ALL_REVIEWS_PRODUCT,
      payload: e.response,
    });
  }
};

// To Delete Review

export const deleteReview = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/reviews/${id}`);

    dispatch({
      type: DELETE_REVIEW,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: DELETE_REVIEW,
      payload: e.response,
    });
  }
};
// To Edite Review

export const editReview = (id, body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/reviews/${id}`, body);

    dispatch({
      type: EDIT_REVIEW,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: EDIT_REVIEW,
      payload: e.response,
    });
  }
};
