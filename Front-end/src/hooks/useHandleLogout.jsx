import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

export const useHandleLogout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login", { replace: true });
  };

  return handleLogout;
};
