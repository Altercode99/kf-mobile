import {
  FETCH_SCANNED_QR,
  FETCH_CURRABSEN,
  FETCH_ABSENS,
  FILTER_ABSEN,
} from "../actions/absen";
import { updateObject, getMonth } from "../../utils/utility";

let date = new Date();
let month = getMonth(date.getMonth());
let year = date.getFullYear();

const initialState = {
  qrScanned: null,
  currentAbsen: null,
  absens: null,
  filter: { month, year: "" + year },
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCANNED_QR:
      return setQRScanned(state, action);
    case FETCH_CURRABSEN:
      return fetchCurrentAbsen(state, action);
    case "CURRABSEN_RESET":
      return resetCurrentAbsen(state, action);
    case FETCH_ABSENS:
      return fetchAbsens(state, action);
    case FILTER_ABSEN:
      return setFilter(state, action);
    default:
      return state;
  }
};

const setQRScanned = (state, action) => {
  return updateObject(state, {
    qrScanned: action.qrScanned,
    currentAbsen: {
      empId: action.absen.empId,
      sapId: action.absen.sapId,
      empName: action.absen.empName,
      gate: action.absen.gate,
      actionDate: action.absen.actionDate,
      action: action.absen.action,
    },
  });
};

const fetchCurrentAbsen = (state, action) => {
  return updateObject(state, {
    qrScanned: action.absen.qrScanned,
    currentAbsen: {
      empId: action.absen.empId,
      sapId: action.absen.sapId,
      empName: action.absen.empName,
      gate: action.absen.gate,
      actionDate: action.absen.actionDate,
      action: action.absen.action,
    },
  });
};

const resetCurrentAbsen = (state, action) => {
  return updateObject(state, {
    qrScanned: null,
    currentAbsen: null,
  });
};

const fetchAbsens = (state, action) => {
  return updateObject(state, {
    absens: action.absens,
  });
};

const setFilter = (state, action) => {
  return updateObject(state, {
    filter: {
      month: action.month,
      year: action.year,
    },
  });
};
