import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/router";

const LogoutButton = () => {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <>{user && <button onClick={handleLogout}>Çıkış Yap ({user})</button>}</>
  );
};

export default LogoutButton;
