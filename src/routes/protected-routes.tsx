import { useToken } from "@/utils/contexts/token";

import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { pathname } = useLocation();
  const { token, user } = useToken();

  const authProtected = ["/login"];
  const protectedByToken = [
    "/attendance",
    "/take-picture",
    "/absence-out",
  ];
  const roleProtected = ["/register"];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (protectedByToken.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;

    if (roleProtected.includes(pathname)) {
      if (user?.role === "user") return <Navigate to="/login" />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;