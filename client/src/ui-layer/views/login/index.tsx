import React from "react";
import "./index.css";
import { CredentialsContainer } from "../../components";

export const LoginPage: React.FC = () => {
  return (
    <main className="login" data-testid="login-page">
      <header className="header">
        <h1>Welcome back</h1>
        <p>Join our community of Educational consultants</p>
      </header>
      <div className="form-container">
        <div className="border-line" />
        <CredentialsContainer />
      </div>
    </main>
  );
};
