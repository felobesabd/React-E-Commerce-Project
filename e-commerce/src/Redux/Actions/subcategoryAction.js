import { GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY } from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import { useGetData } from "./../../Hooks/useGetData";

// Create Subcategory with Pagination
export const createSubcategory = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/subcategories`, data);

    dispatch({
      type: CREATE_SUB_CATEGORY,
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

// Get Subcategory Depending on Categort ID
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: GET_SUB_CATEGORY,
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
