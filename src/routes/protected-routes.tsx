import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useToken } from "@/utils/contexts/token";

const nonLoggedInAccess = ["/login", "/register"];

const routeWhitelist: Record<string, string[]> = {
  user: [
    
    "/attendance",
    "/absence-out",
    "/take-picture",    
  ],
  admin: [
    
    "/register",
  ],
};

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  if (token && user) {
    if (routeWhitelist[user.role].includes(pathname)) return <Outlet />;
    else {
      for (const pattern of routeWhitelist[user.role]) {
        const escapedPattern = pattern.replace(":id", "[a-zA-Z0-9_]+");
        const regex = new RegExp(`^${escapedPattern}$`);

        if (pathname.match(regex)) return <Outlet />;
      }

      return <Navigate to="/login" />;
    }
  } else {
    if (nonLoggedInAccess.includes(pathname)) return <Outlet />;
  }

  return <Outlet />;
};

export default ProtectedRoute;