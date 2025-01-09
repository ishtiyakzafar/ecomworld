import React, { useState } from "react";
import authService from "../../services/auth";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../store/authSlice";
import { addLocalCart } from "../../utils";

const Register = ({ setStep }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await authService.signup({ name, email, password });
      dispatch(actionLogin(res.userDetails));

      if (JSON.parse(localStorage.getItem('cart'))) {
        addLocalCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleRegister} className="row g-3">
      <div className="col-md-6">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          autoComplete="off"
          required
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="col-md-6">
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
      <div className="col-md-12">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          autoComplete="off"
          required
          type="password"
          className="form-control"
          id="cpassword"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />
      </div>
      <div className="col-md-12">
        <small onClick={() => setStep(1)}>
          Already have an account? Log in
        </small>
      </div>
      <div className="col-md-6 mt-4">
        <button type="submit">Register</button>
      </div>
    </form>
  );
};

export default Register;
