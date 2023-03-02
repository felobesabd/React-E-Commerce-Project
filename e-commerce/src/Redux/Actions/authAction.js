import {
  CREATE_NEW_USER,
  LOGIN_USER,
  GET_CURRENT_USER,
  FORGET_PASSWORD,
  VERIFY_PASSWORD,
  RESET_PASSWORD,
  UPDATE_USER_PROFITE,
  UPDATE_USER_PASSWORD,
} from "../Type";
import { useInsertData } from "../../Hooks/useInsertData";
import { useGetData, useGetDataToken } from "./../../Hooks/useGetData";
import { useUpdateData } from "../../Hooks/useUpdateData";

// Create New User
export const creatNewUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/signup`, data);

    dispatch({
      type: CREATE_NEW_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: CREATE_NEW_USER,
      payload: e.response,
    });
  }
};

// Create New User
export const loginUser = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/login`, data);

    dispatch({
      type: LOGIN_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: LOGIN_USER,
      payload: e.response,
    });
  }
};

// Create New User
export const getLoggedUser = () => async (dispatch) => {
  try {
    const response = await useGetDataToken(`/api/v1/users/getMe`);

    dispatch({
      type: GET_CURRENT_USER,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_CURRENT_USER,
      payload: e.response,
    });
  }
};

// 1- Forget Password
export const forgetPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data);

    dispatch({
      type: FORGET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: FORGET_PASSWORD,
      payload: e.response,
    });
  }
};

// 2- Verify Password
export const verifyPassword = (data) => async (dispatch) => {
  try {
    const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data);

    dispatch({
      type: VERIFY_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: VERIFY_PASSWORD,
      payload: e.response,
    });
  }
};
// 3- Reset Password
export const resetPassword = (data) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/auth/resetPassword`, data);

    dispatch({
      type: RESET_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: RESET_PASSWORD,
      payload: e.response,
    });
  }
};
// 4- Update User Data
export const updateUserProfileData = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(`/api/v1/users/updateMe`, body);

    dispatch({
      type: UPDATE_USER_PROFITE,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PROFITE,
      payload: e.response,
    });
  }
};
// 5- Update User Password
export const updateUserProfilePassword = (body) => async (dispatch) => {
  try {
    const response = await useUpdateData(
      `/api/v1/users/changeMyPassword`,
      body
    );

    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: UPDATE_USER_PASSWORD,
      payload: e.response,
    });
  }
};
