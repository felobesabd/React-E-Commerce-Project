import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
} from "../Type";

const initialValue = {
  category: [],
  oneCategory: [],
  loading: true,
};

const categoryReducer = (state = initialValue, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        category: action.payload,
        loading: false,
      };
    case GET_ONE_CATEGORY:
      return {
        oneCategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        category: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default categoryReducer;
