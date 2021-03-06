import { updateObject } from "../../../utils/utility";

const initialState = {
  loginLoading: false,
  loginSuccess: false,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return updateObject(state, {
        loginLoading: true,
        loginSuccess: false,
      });
    case "LOGIN_SUCCESS":
      return updateObject(state, {
        loginLoading: false,
        loginSuccess: true,
      });
    case "LOGIN_ERROR":
      return updateObject(state, {
        loginLoading: false,
      });
    default:
      return state;
  }
};
