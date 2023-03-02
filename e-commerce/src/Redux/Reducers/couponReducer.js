import {
  ADD_COUPON,
  GET_ALL_COUPONS,
  DELETE_COUPON,
  GET_ONE_COUPONS,
  EDIT_COUPON,
} from "../Type";

const initialValue = {
  addCoupon: [],
  allCoupons: [],
  deleteCoupon: [],
  oneCoupon: [],
  editCoupon: [],
};

const couponReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_COUPON:
      return {
        ...state,
        addCoupon: action.payload,
      };
    case GET_ALL_COUPONS:
      return {
        ...state,
        allCoupons: action.payload,
      };
    case DELETE_COUPON:
      return {
        ...state,
        deleteCoupon: action.payload,
      };
    case GET_ONE_COUPONS:
      return {
        ...state,
        oneCoupon: action.payload,
      };
    case EDIT_COUPON:
      return {
        ...state,
        editCoupon: action.payload,
      };
    default:
      return state;
  }
};

export default couponReducer;
