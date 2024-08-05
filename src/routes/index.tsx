import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/page/App";
import Login from "@/page/auth/login";
import Register from "@/page/auth/register";
import Absence from "@/page/user/absence";
import TakePicture from "@/page/user/take-picture";
import Attendance from "@/page/user/attendance";
import AbsenceOut from "@/page/user/absence-out";

const router = createBrowserRouter([
  {
    
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/absence", element: <Absence /> },
      { path: "/absence-out", element: <AbsenceOut /> },
      { path: "/take-picture", element: <TakePicture /> },
      { path: "/attendance", element: <Attendance /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;