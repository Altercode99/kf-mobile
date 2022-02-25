export const FETCH_SCANNED_QR = "FETCH_SCANNED_QR";
export const FETCH_CURRABSEN = "FETCH_CURRABSEN";
export const FETCH_ABSENS = "FETCH_ABSENS";
export const FILTER_ABSEN = "FILTER_ABSEN";

import axios from "../../axios/default";
import { Absen } from "../../constants/endpoint";
import alertHandler from "../../utils/alertHandler";
import * as NavigationServices from "../../services/NavigationServices";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const scanning = (qrScanned, action) => async (dispatch) => {
  const data = {
    qrScanned,
    action,
  };

  try {
    dispatch({ type: "QR_SCAN_START" });
    const req = await axios.post(Absen("scanQRAbsen"), data, config);
    dispatch({
      type: FETCH_SCANNED_QR,
      qrScanned: req.data.qrScanned,
      absen: req.data.absen,
    });
    dispatch({ type: "QR_SCAN_SUCCESS" });
    NavigationServices.navigate("Absen");
  } catch (err) {
    alertHandler("Terjadi Kesalahan!", err.response.data.error);
    dispatch({ type: "ABSEN_ERROR", error: err.response.data.error });
  }
};

export const getCurrentAbsen = () => async (dispatch) => {
  try {
    dispatch({ type: "CURRABSEN_START" });
    const req = await axios.get(Absen("getCurrentAbsen"));
    if (req.data.exist) {
      dispatch({
        type: FETCH_CURRABSEN,
        absen: req.data.absen,
      });
    } else {
      dispatch({ type: "CURRABSEN_RESET" });
    }
    dispatch({ type: "CURRABSEN_SUCCESS" });
  } catch (err) {
    alertHandler("Terjadi Kesalahan!", err.response.data.error);
    dispatch({ type: "ABSEN_ERROR", error: err.response.data.error });
  }
};

export const getAbsens = (month, year) => async (dispatch) => {
  try {
    dispatch({ type: "ABSENS_START" });
    const req = await axios.get(
      Absen("getAbsens", { month_action_date: month, year_action_date: year })
    );
    dispatch({
      type: FETCH_ABSENS,
      absens: req.data.absens,
    });
    dispatch({ type: "ABSENS_SUCCESS" });
  } catch (err) {
    alertHandler("Terjadi Kesalahan!", err.response.data.error);
    dispatch({ type: "ABSEN_ERROR", error: err.response.data.error });
  }
};
