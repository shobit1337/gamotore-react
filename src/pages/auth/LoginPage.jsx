import React from "react";

const LoginPage = () => {
  return (
    <div
      className="bg-dark text-light d-flex flex-center"
      style={{ height: "100vh" }}
    >
      <div className="auth-card">
        <img src="/assets/gamotore-logo-light.svg" alt="" />
        <h4 className="text-light">Sign In</h4>
        <input
          className="input-text"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="input-text"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <span className="d-flex justify-start gap-xs items-center">
          <input type="checkbox" name="remember-me" id="remember-me" />
          <span>Remember me</span>
        </span>
        <button className="btn btn-rounded text-light">Sign In</button>
        <span>
          Forgot your password?
          <a className="text-light" href="/pages/forgot-password.html">
            Reset
          </a>
        </span>
        <span>
          Don't have a Gamotore Account?
          <a className="text-light" href="/pages/sign-up.html">
            Sign Up
          </a>
        </span>
        <span>
          Back to{" "}
          <a className="text-light" href="/">
            Store
          </a>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
