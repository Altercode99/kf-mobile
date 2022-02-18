import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import authLoaderReducer from "./reducers/loading/auth";

const rootReducers = combineReducers({
  auth: authReducer,
  authLoader: authLoaderReducer,
});

export default store = createStore(rootReducers, applyMiddleware(thunk));
