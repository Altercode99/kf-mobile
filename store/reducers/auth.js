import { LOGIN_SUCCESS, LOGOUT } from "../actions/auth";
import { updateObject } from "../../utils/utility";

const initialState = {
  token: null,
  user: null,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return setUser(state, action);
    case LOGOUT:
      return logout(state, action);
    default:
      return state;
  }
};

const setUser = (state, action) => {
  return updateObject(state, {
    token: action.token,
    user: action.user,
  });
};

const logout = (state, action) => {
  return updateObject(state, initialState);
};
