import { useEffect, useState } from "react";
import { AuthController, UserController } from "../../../controller";
import { AuthInterface } from "../../../domains";
import { Logo } from "../../components";
import { Assets } from "../../components/assets";
import "./index.css";
import "../../components/credentials-container/index.css";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [user, setUser] = useState<AuthInterface | undefined>();
  const redirect = useNavigate();

  const onSignout = () => {
    AuthController.signout();
    redirect("/login");
  };

  useEffect(() => {
    (async function () {
      const user = await UserController.loadLoggedInUserData();
      setUser(user);
    })();
  }, []);
  return (
    <main className="home">
      <Logo />
      <div className="home-header">
        <img
          className="welcome-asset"
          alt="welcome-asset"
          src={Assets.WelcomeAsset}
        />
        <h1>Welcome to your page</h1>
        <p>This account is registered to {user?.email ?? ""}</p>
        <button
          onClick={onSignout}
          className="auth-button sign-out sign-out-button"
        >
          Sign out
        </button>
      </div>
    </main>
  );
};
