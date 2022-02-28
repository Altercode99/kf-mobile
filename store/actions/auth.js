export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

import {
  saveDataToStorage,
  removeDataFromStorage,
  getDataFromStorage,
} from "../../utils/utility";

import axios from "../../axios/default";
import { Auth } from "../../constants/endpoint";
import * as NavigationServices from "../../services/NavigationServices";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = (username, password) => async (dispatch) => {
  const data = {
    username,
    password,
  };

  try {
    dispatch({ type: "LOGIN_START" });
    const req = await axios.post(Auth("login"), data, config);
    await saveDataToStorage("@user", {
      token: req.data.token,
      user: req.data.user,
    });
    axios.defaults.headers.common["authorization"] = `Bearer ${req.data.token}`;
    dispatch({
      type: LOGIN_SUCCESS,
      token: req.data.token,
      user: req.data.user,
    });
    dispatch({ type: "LOGIN_SUCCESS" });
    NavigationServices.navigate("Home");
  } catch (err) {
    dispatch({
      type: "SET_ERROR",
      title: "Terjadi Kesalahan!",
      message: err.response.data.error,
    });
    dispatch({ type: "LOGIN_ERROR" });
  }
};

export const checkState = () => async (dispatch) => {
  const userLogged = await getDataFromStorage("@user");
  if (!userLogged) {
    dispatch(logout());
  } else {
    const { token, user } = userLogged;
    dispatch({
      type: LOGIN_SUCCESS,
      token: token,
      user: user,
    });
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
    NavigationServices.navigate("Home");
  }
};

export const logout = () => async (dispatch) => {
  delete axios.defaults.headers.common["authorization"];
  await removeDataFromStorage("@user");
  NavigationServices.navigate("Login");
  dispatch({ type: LOGOUT });
};
