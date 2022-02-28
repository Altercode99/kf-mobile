import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import authLoaderReducer from "./reducers/loading/auth";

import absenReducer from "./reducers/absen";
import absenLoaderReducer from "./reducers/loading/absen";

import userReducer from "./reducers/user";
import userLoaderReducer from "./reducers/loading/user";

import errorReducer from "./reducers/error";

const rootReducers = combineReducers({
  auth: authReducer,
  authLoader: authLoaderReducer,
  absen: absenReducer,
  absenLoader: absenLoaderReducer,
  user: userReducer,
  userLoader: userLoaderReducer,
  error: errorReducer,
});

export default store = createStore(rootReducers, applyMiddleware(thunk));
