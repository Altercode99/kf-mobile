const url = "http://192.168.43.152:8000";
export const baseURL = `${url}/index.php`;

export const Auth = (method, params) => {
  return urlGenerator("auth", "AuthController", method, params);
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
