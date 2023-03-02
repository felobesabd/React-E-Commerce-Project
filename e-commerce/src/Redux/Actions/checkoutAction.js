import { CREATE_ORDER_CASH, GET_ERROR, CREATE_ORDER_VISA } from "../Type";
import { useGetData, useGetDataToken } from "../../Hooks/useGetData";
import {
  useInsertData,
  useInsertDataWithImage,
} from "../../Hooks/useInsertData";

// Create Order Cash For USER
export const createOrderCash = (id, body) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/orders/${id}`, body);

    dispatch({
      type: CREATE_ORDER_CASH,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_CASH,
      payload: e.response,
    });
  }
};

// Create Order VISA For USER
export const createOrderVISA = (id, body) => async (dispatch) => {
  try {
    const response = await useGetDataToken(
      `/api/v1/orders/checkout-session/${id}`,
      body
    );
    console.log(response);

    dispatch({
      type: CREATE_ORDER_VISA,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: CREATE_ORDER_VISA,
      payload: e.response,
    });
  }
};
