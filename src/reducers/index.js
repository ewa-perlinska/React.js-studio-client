import { combineReducers } from "redux";
import auth from "./auth";
import studiosReducer from "./studios";
import workshopsReducer from "./workshops";

export default combineReducers({
  auth: auth,
  studios: studiosReducer,
  workshops: workshopsReducer
});
