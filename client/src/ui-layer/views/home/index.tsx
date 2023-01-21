import { Logo } from "../../components";
import { Assets } from "../../components/assets";
import "./index.css";

export const HomePage = () => {
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
        <p>This account is registered to anthony@gmail.com</p>
      </div>
    </main>
  );
};
