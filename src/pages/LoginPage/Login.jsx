import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../store/authSlice";
import authService from "../../services/auth";
import { toast } from "react-toastify";

const Login = ({ setStep }) => {
  const [email, setEmail] = useState("ishtiyak@gmail.com");
  const [password, setPassword] = useState("123456");
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.signin({ email, password });
      dispatch(actionLogin(res.userDetails));
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="row g-3">
      <div className="col-md-12">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          autoComplete="off"
          required
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="col-md-12">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          autoComplete="off"
          required
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <small onClick={() => setStep(3)}>Forgot your password?</small>
      </div>
      <div className="col-md-6">
        <small onClick={() => setStep(2)}>
          New customer? Create your account
        </small>
      </div>
      <div className="col-md-6 mt-4">
        <button type="submit">Sign in</button>
      </div>
    </form>
  );
};

export default Login;
