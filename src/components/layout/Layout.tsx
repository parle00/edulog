import React from "react";
import Header from "./Header";
import { useAuth } from "@/hooks/useAuth";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { user } = useAuth();
  const pathane = usePathname();

  return (
    <>
      {user && pathane !== "/" && <Header />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
