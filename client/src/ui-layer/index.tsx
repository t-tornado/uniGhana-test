import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./hoc";
import { HomePage, LoginPage } from "./views";

export const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <LoginPage />
      </>
    ),
  },
]);
