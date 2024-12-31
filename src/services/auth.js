import http from "./http";

const signin = (data) => {
  return http.post('auth/signin', data);
}
const signup = (data) => {
  return http.post('auth/signup', data);
}

const authService = {
  signin,
  signup,
};

export default authService;