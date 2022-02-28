import { updateObject } from "../../utils/utility";

const initialState = {
  error: null,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return updateObject(state, {
        error: {
          title: action.title,
          message: action.message,
        },
      });
    case "RESET_ERROR":
      return updateObject(state, {
        error: null,
      });
    default:
      return state;
  }
};
