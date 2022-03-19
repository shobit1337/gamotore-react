import React from "react";

const SignupPage = () => {
  return (
    <div
      className="bg-dark text-light d-flex flex-center"
      style={{ height: "100vh" }}
    >
      <div className="auth-card">
        <img src="/assets/gamotore-logo-light.svg" alt="" />
        <h4 className="text-light">Sign Up</h4>
        <input
          className="input-text"
          type="text"
          name="country"
          id="country"
          placeholder="Country"
        />
        <span className="d-flex gap-sm">
          <input
            className="input-text"
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
          />
          <input
            className="input-text"
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
          />
        </span>
        <input
          className="input-text"
          type="text"
          name="display-name"
          id="display-name"
          placeholder="Display Name"
        />
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
        <button className="btn btn-rounded text-light">Sign Up</button>

        <span>
          Have a Gamotore Account?
          <a className="text-light" href="/pages/sign-in.html">
            Sign In
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

export default SignupPage;
