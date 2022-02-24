import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import authLoaderReducer from "./reducers/loading/auth";
import absenReducer from "./reducers/absen";
import absenLoaderReducer from "./reducers/loading/absen";

const rootReducers = combineReducers({
  auth: authReducer,
  authLoader: authLoaderReducer,
  absen: absenReducer,
  absenLoader: absenLoaderReducer,
});

export default store = createStore(rootReducers, applyMiddleware(thunk));
