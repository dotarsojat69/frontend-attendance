import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/page/App";
import Login from "@/page/auth/login";
import Register from "@/page/auth/register";

const router = createBrowserRouter([
  {
    
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;