import { useGetData } from "../../Hooks/useGetData";
import { useInsertDataWithImage } from "../../Hooks/useInsertData";
import {
  GET_ERROR,
  CREATE_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_SIMILAR_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS_BY_CATEGORY,
  GET_ALL_PRODUCTS_BY_BRAND,
} from "../Type";
import { GET_ALL_PRODUCTS } from "./../Type";
import useDeleteData from "./../../Hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../Hooks/useUpdateData";

// Create Products with Pagination
export const createProducts = (formatData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/v1/products`,
      formatData
    );

    dispatch({
      type: CREATE_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get all Products with Pagination
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?limit=${limit}`);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get all Products with Pagination & Pages Number
export const getAllProductsPage = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/v1/products?limit=${limit}&page=${page}`
    );

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get all Products with Query String
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?${queryString}`);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get One Product By ID
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products/${id}`);

    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get Similar Products
export const getSimilarProducts = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/products?category=${id}`);

    dispatch({
      type: GET_SIMILAR_PRODUCTS,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// To Delete Product By ID
export const deleteProducts = (id) => async (dispatch) => {
  try {
    const response = await useDeleteData(`/api/v1/products/${id}`);

    dispatch({
      type: DELETE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// To Edit and Update Product By ID
export const updateProducts = (id, data) => async (dispatch) => {
  try {
    const response = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      data
    );

    dispatch({
      type: UPDATE_PRODUCT,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get All Products By Category
export const getAllProductaByCategory =
  (limit, page, catID) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&category=${catID}`
      );

      dispatch({
        type: GET_ALL_PRODUCTS_BY_CATEGORY,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_BY_CATEGORY,
        payload: e.response,
      });
    }
  };

// Get All Products By Category
export const getAllProductaByBrand =
  (limit, page, brandID) => async (dispatch) => {
    try {
      const response = await useGetData(
        `/api/v1/products?limit=${limit}&page=${page}&brand=${brandID}`
      );

      dispatch({
        type: GET_ALL_PRODUCTS_BY_BRAND,
        payload: response,
        loading: true,
      });
    } catch (e) {
      dispatch({
        type: GET_ALL_PRODUCTS_BY_BRAND,
        payload: e.response,
      });
    }
  };
