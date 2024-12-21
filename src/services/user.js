import http from "./http";

const login = (data) => {
  return http.post('users/login', data);
}
const register = (data) => {
  return http.post('users/register', data);
}

const userService = {
  login,
  register,
};

export default userService;