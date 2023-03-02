import {
  CREATE_REVIEW,
  ALL_REVIEWS_PRODUCT,
  DELETE_REVIEW,
  EDIT_REVIEW,
} from "../Type";

const initialValue = {
  createReview: [],
  allReviewsProduct: [],
  deleteReview: [],
  editReview: [],
  loading: true,
};

const reviewReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return {
        ...state,
        createReview: action.payload,
        loading: false,
      };
    case ALL_REVIEWS_PRODUCT:
      return {
        ...state,
        allReviewsProduct: action.payload,
        loading: false,
      };
    case DELETE_REVIEW:
      return {
        ...state,
        deleteReview: action.payload,
        loading: false,
      };
    case EDIT_REVIEW:
      return {
        ...state,
        editReview: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reviewReducer;
