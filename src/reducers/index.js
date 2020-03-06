import { combineReducers } from "redux";
import auth from "./auth";
import studiosReducer from "./studios";

export default combineReducers({ auth: auth, studios: studiosReducer });
