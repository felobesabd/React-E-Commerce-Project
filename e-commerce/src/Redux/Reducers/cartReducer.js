import {
  ADD_PRODUCT_TO_CART,
  GET_ALL_USER_CART_ITEMS,
  CLEAR_ALL_USER_CART_ITEMS,
  DELETE_ONE_CART_ITEM,
  UPDATE_CART_ITEM_QUANTITY,
  APPLY_COUPON_ON_CART,
} from "../Type";

const initialValue = {
  addProductToCart: [],
  getAllUserCart: [],
  clearCartItems: [],
  deleteOneCartItem: [],
  updateCartItemQuantity: [],
  applyCouponOnCart: [],
};

const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        ...state,
        addProductToCart: action.payload,
      };
    case GET_ALL_USER_CART_ITEMS:
      return {
        ...state,
        getAllUserCart: action.payload,
      };
    case CLEAR_ALL_USER_CART_ITEMS:
      return {
        ...state,
        clearCartItems: action.payload,
      };
    case DELETE_ONE_CART_ITEM:
      return {
        ...state,
        deleteOneCartItem: action.payload,
      };
    case UPDATE_CART_ITEM_QUANTITY:
      return {
        ...state,
        updateCartItemQuantity: action.payload,
      };
    case APPLY_COUPON_ON_CART:
      return {
        ...state,
        applyCouponOnCart: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
