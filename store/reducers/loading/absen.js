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
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    //@scanQRAbsen
    case "QR_SCAN_START":
      return updateObject(state, {
        qrLoading: true,
        qrSuccess: false,
      });
    case "QR_SCAN_SUCCESS":
      return updateObject(state, {
        qrLoading: false,
        qrSuccess: true,
      });
    case "QR_SCAN_ERROR":
      return updateObject(state, {
        qrLoading: false,
      });
    //@getCurrentAbsen
    case "CURRABSEN_START":
      return updateObject(state, {
        currAbsenLoading: true,
        currAbsenSuccess: false,
      });
    case "CURRABSEN_SUCCESS":
      return updateObject(state, {
        currAbsenLoading: false,
        currAbsenSuccess: true,
      });
    case "CURRABSEN_ERROR":
      return updateObject(state, {
        currAbsenLoading: false,
      });
    //@getAbsens
    case "ABSENS_START":
      return updateObject(state, {
        absensLoading: true,
        absensSuccess: false,
      });
    case "ABSENS_SUCCESS":
      return updateObject(state, {
        absensLoading: false,
        absensSuccess: true,
      });
    case "ABSENS_ERROR":
      return updateObject(state, {
        absensLoading: false,
      });
    //@setFilter
    case "FILTER_START":
      return updateObject(state, {
        filterLoading: true,
        filterSuccess: false,
      });
    case "FILTER_SUCCESS":
      return updateObject(state, {
        filterLoading: false,
        filterSuccess: true,
      });
    default:
      return state;
  }
};
