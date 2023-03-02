import {
  GET_ERROR,
  CREATE_PRODUCTS,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_SIMILAR_PRODUCTS,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_ALL_PRODUCTS_BY_CATEGORY,
  GET_ALL_PRODUCTS_BY_BRAND,
} from "../Type";

const initialValue = {
  products: [],
  allproducts: [],
  oneProduct: [],
  similarProducts: [],
  deleteProduct: [],
  updateProducts: [],
  getAllProductaByCategory: [],
  getAllProductaByBrand: [],
  loading: true,
};

const productsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case CREATE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        allproducts: action.payload,
        loading: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        oneProduct: action.payload,
        loading: false,
      };
    case GET_SIMILAR_PRODUCTS:
      return {
        ...state,
        similarProducts: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        similarProducts: action.payload,
        loading: false,
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProducts: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        getAllProductaByCategory: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS_BY_BRAND:
      return {
        ...state,
        getAllProductaByBrand: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        products: action.payload,
        loading: true,
      };
    default:
      return state;
  }
};

export default productsReducer;
