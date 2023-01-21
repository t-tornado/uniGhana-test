import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./hoc";
import { LoginPage } from "./views";

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
          <div>
            <h1>Welcome Homepage</h1>
          </div>
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
