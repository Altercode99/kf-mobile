import { updateObject } from "../../../utils/utility";

const initialState = {
  profileLoading: false,
  profileSuccess: false,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_START":
      return updateObject(state, {
        profileLoading: true,
        profileSuccess: false,
      });
    case "PROFILE_SUCCESS":
      return updateObject(state, {
        profileLoading: false,
        profileSuccess: true,
      });
    case "PROFILE_ERROR":
      return updateObject(state, {
        profileLoading: false,
      });
    default:
      return state;
  }
};
