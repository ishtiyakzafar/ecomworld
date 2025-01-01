import React, { useState } from "react";
import "./LoginModal.scss";
import { MdClose } from "react-icons/md";
import Register from "./Register";
import ResetPassword from "./ResetPassword";
import Login from "./Login";
import { useDispatch } from "react-redux";
import { actionToggleLoginPopup } from "../../store/appSlice";

const LoginModal = ({ showLoginPopup }) => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className="login">
      <div className="login_popup">
        <div
          onClick={() => {
            dispatch(actionToggleLoginPopup(false))
            // const body = document.querySelector("body");
            // body.style.overflow = "auto";
          }}
          className="close"
        >
          <MdClose />
        </div>
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

export default LoginModal;
