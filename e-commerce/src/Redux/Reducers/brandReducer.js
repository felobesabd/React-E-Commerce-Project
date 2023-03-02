import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND } from "../Type";

const initialValue = {
  brand: [],
  oneBrand: [],
  loading: true,
};

const brandReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_ALL_BRAND:
      return {
        ...state,
        brand: action.payload,
        loading: false,
      };
    case CREATE_BRAND:
      return {
        brand: action.payload,
        loading: false,
      };
    case GET_ONE_BRAND:
      return {
        oneBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        brand: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default brandReducer;
