import React, { useState } from 'react';
import './Login.scss';
import { MdClose } from "react-icons/md";

const Login = ({ showLoginPopup }) => {
  const [step, setStep] = useState(1);

  return (
    <div className='login'>
      <div className='login_popup'>
        <div
          onClick={() => {
            showLoginPopup(false);
            const body = document.querySelector('body');
            body.style.overflow = 'auto';
          }}
          className='close'>
          <MdClose />
        </div>
        <h1>{step === 1 ? 'Log in' : step === 2 ? "Register here" : step === 3 ? "Reset password" : step === 4 ? "Reset password" : ""}</h1>
        {
          step === 1 ?
            <form className="row g-3">
              <div className="col-md-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input autoComplete='off' required type="email" className="form-control" id="email" />
              </div>
              <div className="col-md-12">
                <label htmlFor="password" className="form-label">Password</label>
                <input autoComplete='off' required type="password" className="form-control" id="password" />
              </div>
              <div className="col-md-6">
                <small onClick={() => setStep(3)}>Forgot your password?</small>
              </div>
              <div className="col-md-6">
                <small onClick={() => setStep(2)}>New customer? Create your account</small>
              </div>
              <div className="col-md-6 mt-4">
                <button type="submit">Sign in</button>
              </div>
            </form>
            : step === 2 ?
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input autoComplete='off' required type="text" className="form-control" id="name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input autoComplete='off' required type="email" className="form-control" id="email" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input autoComplete='off' required type="password" className="form-control" id="password" />
                </div>
                <div className="col-md-12">
                  <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                  <input autoComplete='off' required type="password" className="form-control" id="cpassword" />
                </div>
                <div className="col-md-12">
                  <small onClick={() => setStep(1)}>Already have an account? Log in</small>
                </div>
                <div className="col-md-6 mt-4">
                  <button type="submit">Register</button>
                </div>
              </form>
              : step === 3 ?
                <form className="row g-3">
                  <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input autoComplete='off' required type="email" className="form-control" id="email" />
                  </div>
                  <div className="col-md-12">
                    <small onClick={() => setStep(1)}>Back</small>
                  </div>
                  <div className="col-md-6 mt-4">
                    <button onClick={() => setStep(4)} type="submit">Submit</button>
                  </div>
                </form>
                : step === 4 ?
                  <form className="row g-3">
                    <div className="col-md-12">
                      <label htmlFor="npassword" className="form-label">New Password</label>
                      <input autoComplete='off' required type="password" className="form-control" id="npassword" />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="cnpassword" className="form-label">Confirm New Password</label>
                      <input autoComplete='off' required type="password" className="form-control" id="cnpassword" />
                    </div>
                    <div className="col-md-12">
                      <small onClick={() => setStep(3)}>Back</small>
                    </div>
                    <div className="col-md-6 mt-4">
                      <button type="submit">Reset</button>
                    </div>
                  </form>
                  : ""

        }
      </div>
    </div>
  )
};

export default Login;