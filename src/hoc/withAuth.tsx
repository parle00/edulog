import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const withAuth = (WrappedComponent: any) => {
  const AuthComponent = (props: any) => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        localStorage.clear();
        router.push("/");
      }
    }, [user, router]);

    if (!user) return null;

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
