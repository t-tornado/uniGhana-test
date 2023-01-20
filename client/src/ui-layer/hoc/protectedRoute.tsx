import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
  const navigate = useNavigate();
  const isLoggedIn = true;
  if (isLoggedIn) {
    navigate("/login");
    return null;
  }
  return children;
};
