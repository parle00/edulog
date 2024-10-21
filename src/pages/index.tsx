import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);
    router.push("/patients");
  };

  return (
    <div>
      <h1>Giriş Yap</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
