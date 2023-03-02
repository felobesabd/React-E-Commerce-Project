import { useGetDataToken } from "../../Hooks/useGetData";
import { useUpdateData } from "../../Hooks/useUpdateData";
import {
  GET_ALL_ORDER,
  GET_ONE_ORDER,
  UPDATE_ORDER_PAY,
  UPDATE_ORDER_DELIVER,
} from "../Type";

// Get All Orders
export const getAllOrders = (limit, page) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/orders?limit=${limit}&page=${page}`
    );

    dispatch({
      type: GET_ALL_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_ORDER,
      payload: e.response,
    });
  }
};

// Get One Order
export const getOneOrder = (id) => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/orders/${id}`);

    dispatch({
      type: GET_ONE_ORDER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ONE_ORDER,
      payload: e.response,
    });
  }
};

// Change Order Pay
export const changeOrderPay = (id) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/orders/${id}/pay`);

    dispatch({
      type: UPDATE_ORDER_PAY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ORDER_PAY,
      payload: e.response,
    });
  }
};

// Change Order Pay
export const changeOrderDeliver = (id) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/orders/${id}/deliver`);

    dispatch({
      type: UPDATE_ORDER_DELIVER,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_ORDER_DELIVER,
      payload: e.response,
    });
  }
};
