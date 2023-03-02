import {
  ADD_USER_ADDRESS,
  GET_ALL_USER_ADDRESS,
  DELETE_USER_ADDRESS,
  GET_SPECIFIC_USER_ADDRESS,
  EDIT_USER_ADDRESS,
} from "../Type";

const initialValue = {
  addUserAddress: [],
  getAllUserAddress: [],
  deleteUserAddress: [],
  getSpecificUserAddress: [],
  editUserAddress: [],
};

const userAddressReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_USER_ADDRESS:
      return {
        ...state,
        addUserAddress: action.payload,
      };
    case GET_ALL_USER_ADDRESS:
      return {
        ...state,
        getAllUserAddress: action.payload,
      };
    case DELETE_USER_ADDRESS:
      return {
        ...state,
        deleteUserAddress: action.payload,
      };
    case GET_SPECIFIC_USER_ADDRESS:
      return {
        ...state,
        getSpecificUserAddress: action.payload,
      };
    case EDIT_USER_ADDRESS:
      return {
        ...state,
        editUserAddress: action.payload,
      };
    default:
      return state;
  }
};

export default userAddressReducer;
