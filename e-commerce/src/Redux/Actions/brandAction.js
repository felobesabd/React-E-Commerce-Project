import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND } from "../Type";
import { useGetData } from "../../Hooks/useGetData";
import { useInsertData } from "../../Hooks/useInsertData";

// Get All Brands
export const getAllBrands = (limit) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
// Get One Brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands/${id}`);

    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Get All Brands with Pagination
export const getAllBrandsPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=5&page=${page}`);

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

// Insert Brands with Pagination

export const createBrands = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/brands`, formData);

    dispatch({
      type: CREATE_BRAND,
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
