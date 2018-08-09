import constants from "./constants";
import { all, takeLatest } from "redux-saga/effects";

import signupRequest from "./signup/action";

function* watchActions() {
  yield takeLatest(constants.USER_SIGNUP_REQUEST, signupRequest);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
