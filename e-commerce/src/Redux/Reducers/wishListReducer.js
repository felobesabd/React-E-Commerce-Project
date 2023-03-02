import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../Type";

const initialValue = {
  addWishList: [],
  removeWishList: [],
  allWishlist: [],
};

const addToWishListReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return {
        ...state,
        addWishList: action.payload,
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        removeWishList: action.payload,
      };
    case USER_WISHLIST:
      return {
        ...state,
        allWishlist: action.payload,
      };
    default:
      return state;
  }
};

export default addToWishListReducer;
