import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./hoc";
import { LoginPage } from "./views";

export const App = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Welcome to UniGhana Test App</h1>
      </div>
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
