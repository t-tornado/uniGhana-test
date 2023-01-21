import { useEffect, useState } from "react";
import { UserController } from "../../../controller";
import { AuthInterface } from "../../../domains";
import { Logo } from "../../components";
import { Assets } from "../../components/assets";
import "./index.css";

export const HomePage = () => {
  const [user, setUser] = useState<AuthInterface | undefined>();

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
      </div>
    </main>
  );
};
