import axiosCall from "../../services/axiosCall";
import { call, put } from "redux-saga/effects";
import * as actions from "../actions";

function* signupRequest(action) {
  try {
    const response = yield call(axiosCall, "add_user", "POST", {
      name: action.payload.name,
      email: action.payload.email,
      password: action.payload.password,
      role: action.payload.role
    });
    if (response && (response.status === 200 || response.status === 304)) {
      yield put(actions.userSignUpSuccess(response.data));
    } else if (response && response.error === 1) {
      yield put(actions.userSignUpError("error"));
    }
  } catch (error) {
    yield put(actions.userSignUpError("error"));
  }
}

export default signupRequest;
