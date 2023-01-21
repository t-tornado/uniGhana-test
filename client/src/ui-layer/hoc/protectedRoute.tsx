import { useNavigate } from "react-router-dom";
import { UserController } from "../../controller";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const loggedInUserObject = UserController.loadLoggedInUserData();
  if (loggedInUserObject?.email === undefined) {
    navigate("/login");
    return null;
  }
  return children;
};
