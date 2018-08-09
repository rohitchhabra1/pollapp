import * as constants from "./constants";
import { all, takeLatest } from "redux-saga/effects";
import { signUpRequest } from "./signUp/action/";

export function* watchActions() {
  yield takeLatest(constants.USER_SIGNUP_REQUEST, signUpRequest);
}

export default function* rootSaga() {
  yield all[watchActions()];
}
