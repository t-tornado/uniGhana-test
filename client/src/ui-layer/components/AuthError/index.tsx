import React from "react";
import { Assets } from "../assets";
import "./index.css";

interface AuthErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string;
  iconProps?: React.HTMLAttributes<HTMLImageElement>;
}

export const AuthError: React.FC<AuthErrorProps> = ({ message, iconProps }) => {
  return (
    <div className="error-alert ">
      <img {...iconProps} src={Assets.UserError} alt="user-error" />
      <p>{message}</p>
    </div>
  );
};
