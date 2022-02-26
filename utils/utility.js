import AsyncStorage from "@react-native-async-storage/async-storage";

export const updateObject = (currentObject, updatedProperties) => {
  return {
    ...currentObject,
    ...updatedProperties,
  };
};

export const updateArray = (currentArray, updatedProperties) => {
  return [...currentArray, updatedProperties];
};

export const saveDataToStorage = async (storageName, objectData) => {
  return await AsyncStorage.setItem(storageName, JSON.stringify(objectData));
};

export const getDataFromStorage = async (storageName) => {
  const data = await AsyncStorage.getItem(storageName);
  return JSON.parse(data);
};

export const removeDataFromStorage = async (storageName) => {
  return await AsyncStorage.removeItem(storageName);
};

export const revDate = (date) => {
  return date.split("-").reverse().join("-");
};

export const indoDate = (d) => {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = {
    1: "Januari",
    2: "Februari",
    3: "Maret",
    4: "April",
    5: "Mei",
    6: "Juni",
    7: "Juli",
    8: "Agustus",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
  };

  let date = d.getDate();
  let day = days[d.getDay()];
  let month = months[d.getMonth() + 1];
  let year = d.getFullYear();

  return `${day}, ${date} ${month} ${year}`;
};

export const indoMonth = (d) => {
  const months = {
    1: "Januari",
    2: "Februari",
    3: "Maret",
    4: "April",
    5: "Mei",
    6: "Juni",
    7: "Juli",
    8: "Agustus",
    9: "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
  };

  let month = months[d.getMonth() + 1];
  let year = d.getFullYear();

  return `${month} ${year}`;
};

export const toMonth = (month) => {
  const months = {
    "01": "Januari",
    "02": "Februari",
    "03": "Maret",
    "04": "April",
    "05": "Mei",
    "06": "Juni",
    "07": "Juli",
    "08": "Agustus",
    "09": "September",
    10: "Oktober",
    11: "November",
    12: "Desember",
  };

  return months[month];
};

export const toM = (month) => {
  const months = {
    Januari: 1,
    Februari: 2,
    Maret: 3,
    April: 4,
    Mei: 5,
    Juni: 6,
    Juli: 7,
    Agustus: 8,
    September: 9,
    Oktober: 10,
    November: 11,
    Desember: 12,
  };

  return months[month];
};

export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getMonth = (month) => {
  month = month + 1;
  if (month < 10) {
    return "0" + month;
  } else {
    return month;
  }
};
