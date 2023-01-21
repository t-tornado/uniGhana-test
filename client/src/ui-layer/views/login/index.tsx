import React from "react";
import "./index.css";
import { CredentialsContainer, Logo } from "../../components";

export const LoginPage: React.FC = () => {
  return (
    <main className="login" data-testid="login-page">
      <header className="header">
        <Logo size="25" />
        <p>Join our community of Educational consultants</p>
      </header>
      <div className="form-container">
        <div className="border-line" />
        <CredentialsContainer />
      </div>
    </main>
  );
};
