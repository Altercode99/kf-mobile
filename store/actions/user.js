export const FETCH_PROFILE = "FETCH_PROFILE";

import axios from "../../axios/default";
import { User } from "../../constants/endpoint";
import * as NavigationServices from "../../services/NavigationServices";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "PROFILE_START" });
    const req = await axios.get(User("getProfile"));
    dispatch({
      type: FETCH_PROFILE,
      profile: req.data.profile,
    });
    dispatch({ type: "PROFILE_SUCCESS" });
  } catch (err) {
    dispatch({
      type: "SET_ERROR",
      title: "Terjadi Kesalahan!",
      message: err.response.data.error,
    });
    dispatch({ type: "PROFILE_ERROR" });
  }
};
