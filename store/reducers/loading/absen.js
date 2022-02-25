import { updateObject } from "../../../utils/utility";

const initialState = {
  qrLoading: false,
  qrSuccess: false,
  currAbsenLoading: false,
  currAbsenSuccess: false,
  absensLoading: false,
  absensSuccess: false,
  filterLoading: false,
  filterSuccess: false,
  error: null,
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    //@scanQRAbsen
    case "QR_SCAN_START":
      return updateObject(state, {
        qrLoading: true,
        qrSuccess: false,
        error: null,
      });
    case "QR_SCAN_SUCCESS":
      return updateObject(state, {
        qrLoading: false,
        qrSuccess: true,
      });
    //@getCurrentAbsen
    case "CURRABSEN_START":
      return updateObject(state, {
        currAbsenLoading: true,
        currAbsenSuccess: false,
        error: null,
      });
    case "CURRABSEN_SUCCESS":
      return updateObject(state, {
        currAbsenLoading: false,
        currAbsenSuccess: true,
      });
    case "CURRABSEN_RESET":
      return updateObject(state, {
        error: null,
      });
    //@getAbsens
    case "ABSENS_START":
      return updateObject(state, {
        absensLoading: true,
        absensSuccess: false,
        error: null,
      });
    case "ABSENS_SUCCESS":
      return updateObject(state, {
        absensLoading: false,
        absensSuccess: true,
      });
    //@setFilter
    case "FILTER_START":
      return updateObject(state, {
        filterLoading: true,
        filterSuccess: false,
        error: null,
      });
    case "FILTER_SUCCESS":
      return updateObject(state, {
        filterLoading: false,
        filterSuccess: true,
      });
    //@Handle Error
    case "ABSEN_ERROR":
      return updateObject(state, {
        qrLoading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
