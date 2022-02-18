import { updateObject } from "../../../utils/utility";

const initialState = {
  loginLoading: false,
  loginSuccess: false,
  error: null,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_LOADING_START":
      return updateObject(state, {
        loginLoading: true,
        loginSuccess: false,
        error: null,
      });
    case "LOGIN_LOADING_SUCCESS":
      return updateObject(state, {
        loginLoading: false,
        loginSuccess: true,
      });
    case "LOGIN_ERROR":
      return updateObject(state, {
        loginLoading: false,
        error: action.error,
      });
    default:
      return state;
  }
};
