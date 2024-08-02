import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "@/page/App";

const router = createBrowserRouter([
  {
    
    children: [
      { path: "/", element: <Homepage /> },
      
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;