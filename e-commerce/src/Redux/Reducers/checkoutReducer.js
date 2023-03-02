import { CREATE_ORDER_CASH, GET_ERROR, CREATE_ORDER_VISA } from "../Type";

const initialValue = {
  createOrderCash: [],
  createOrderVISA: [],
  loading: true,
};

const checkoutReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_ORDER_CASH:
      return {
        ...state,
        createOrderCash: action.payload,
      };
    case CREATE_ORDER_VISA:
      return {
        ...state,
        createOrderVISA: action.payload,
      };

    default:
      return state;
  }
};

export default checkoutReducer;
