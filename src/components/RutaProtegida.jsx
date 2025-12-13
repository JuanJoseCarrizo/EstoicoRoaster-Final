import { Navigate } from "react-router-dom";
import { useAuth } from "../paginas/AuthContext";

export default function RutaProtegida({ children }) {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}