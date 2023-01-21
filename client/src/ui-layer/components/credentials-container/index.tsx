import React, { useRef } from "react";
import { Logo } from "../atoms";
import { AuthError } from "../AuthError";
import "./index.css";

interface CredentialsContainerProps {}

export const CredentialsContainer: React.FC<CredentialsContainerProps> = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const onSignIn = (e?: any) => {
    e?.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const emailValidationRegex = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    const emailIsValid = emailValidationRegex.test(email ?? "");
    if (email && password) {
      console.log(email, password);
    }
  };
  const onSignUp = (e?: any) => {
    e?.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <section
      className="credentials-container"
      data-testid="login-credentials-container"
    >
      <div className="logo-container">
        <Logo />
      </div>
      <form data-testid="login-form" id="login-form">
        <div className="auth-input-container">
          <input
            ref={emailInputRef}
            className="auth-input"
            placeholder="Enter your email"
          />
          <input
            type="password"
            ref={passwordInputRef}
            className="auth-input"
            placeholder="* * * * * *"
          />
        </div>
        <div className="error-container">
          <AuthError message="Invalid email" />
        </div>
        <div className="login-button-container">
          <button
            onClick={onSignIn}
            className="auth-button sign-in"
            data-testid="signin-button"
          >
            Sign in
          </button>
          <span>-&nbsp;&nbsp;Or&nbsp;&nbsp;-</span>
          <button
            onClick={onSignUp}
            className="auth-button sign-out"
            data-testid="signout-button"
          >
            Create New Account
          </button>
        </div>
      </form>
    </section>
  );
};
