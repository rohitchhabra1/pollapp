import { combineReducers } from "redux";

import login from "./login/reducer"
import signup from "./signup/reducer"

const rootReducer = combineReducers({
    login: login,
    signup: signup
})

export default rootReducer;