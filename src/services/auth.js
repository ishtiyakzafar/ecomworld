import http from "./http";

const login = (data) => {
  return http.post('users/login', data);
}
const register = (data) => {
  return http.post('register', data);
}

const authService = {
  login,
  register,
};

export default authService;