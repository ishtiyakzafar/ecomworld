import React, { useState } from "react";
import "./LoginPage.scss";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { actionToggleLoginPopup } from "../../store/appSlice";

const LoginPage = ({ showLoginPopup }) => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();



  return (
    <div className="loginpage">
      <div className="login_popup">
        <h1>
          {step === 1
            ? "Log in"
            : step === 2
              ? "Register here"
              : step === 3
                ? "Reset password"
                : step === 4
                  ? "Reset password"
                  : ""}
        </h1>
        {step === 1 ? (
          <Login setStep={setStep} />
        ) : step === 2 ? (
          <Register setStep={setStep} />
        ) : (
          <ResetPassword step={step} setStep={setStep} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;