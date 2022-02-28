// const url = "http://10.9.115.10:8000";
// const url = "http://192.168.43.152:8000";
const url = "https://spekta.id";
export const baseURL = `${url}/index.php`;

export const Auth = (method, params) => {
  return urlGenerator("auth", "AuthController", method, params);
};

export const User = (method, params) => {
  return urlGenerator("app", "UserController", method, params);
};

export const Absen = (method, params) => {
  return urlGenerator("app", "AbsenController", method, params);
};

const urlGenerator = (directory, controller, method, params = null) => {
  if (params) {
    let query;
    for (let param in params) {
      query = !query
        ? `&${param}=${params[param]}`
        : query + `&${param}=${params[param]}`;
    }
    return `${url}/index.php?d=api/${directory}&c=${controller}&m=${method}${query}`;
  } else {
    return `${url}/index.php?d=api/${directory}&c=${controller}&m=${method}`;
  }
};
