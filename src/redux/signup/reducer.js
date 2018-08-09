import { update } from "immutability-helper";
import { handleActions } from "redux-actions";
import * as constants from "../constants";

const defaultState = {
  userSignUp: {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ""
  }
};

const userSignUpRequest = (state, action) =>
  update(state, {
    userSignUp: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false },
      message: { $set: "" }
    }
  });
const userSignUpSuccess = (state, action) =>
  update(state, {
    userSignUp: {
      data: { $set: action.payload },
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      message: { $set: "success" }
    }
  });
const userSignUpError = (state, action) =>
  update(state, {
    userSignUp: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });

export default handleActions(
  {
    [constants.USER_SIGNUP_REQUEST]: userSignUpRequest,
    [constants.USER_SIGNUP_SUCCESS]: userSignUpSuccess,
    [constants.USER_SIGNUP_ERROR]: userSignUpError
  },
  defaultState
);
