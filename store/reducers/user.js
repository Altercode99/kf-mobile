import { FETCH_PROFILE } from "../actions/user";
import { updateObject } from "../../utils/utility";

const initialState = {
  profile: null,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE:
      return setProfile(state, action);
    default:
      return state;
  }
};

const setProfile = (state, action) => {
  return updateObject(state, {
    profile: action.profile,
  });
};
