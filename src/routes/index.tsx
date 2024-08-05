import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/page/App";
import Login from "@/page/auth/login";
import Register from "@/page/auth/register";
import Absence from "@/page/user/absence";
import TakePicture from "@/page/user/take-picture";
import AbsenceOut from "@/page/user/absence-out";
import ProtectedRoute from "./protected-routes";

const App = () => {

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/attendance", element: <Absence /> },
      { path: "/absence-out", element: <AbsenceOut /> },
      { path: "/take-picture", element: <TakePicture /> },
    ],
  },
]);

  return <RouterProvider router={router} />;
};

export default App;