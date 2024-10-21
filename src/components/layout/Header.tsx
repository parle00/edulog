import React from "react";
import EdulogButton from "../commons/EdulogButton";
import { useAuth } from "@/hooks/useAuth";
import HeaderStyle from "@/styles/Header.module.css";
import { BiSolidLogOut } from "react-icons/bi";
import EdulogContainer from "../commons/EdulogContainer";

const Header = () => {
  const { logout } = useAuth();
  return (
    <header className={HeaderStyle.header}>
      <EdulogContainer className={HeaderStyle.headerContainer}>
        <span>Edulog Hastane Yönetim</span>
        <div>
          <EdulogButton
            onClick={logout}
            className={HeaderStyle.logoutButton}
            title="Çıkış"
          >
            <BiSolidLogOut style={{ fontSize: "24px" }} />
          </EdulogButton>
        </div>
      </EdulogContainer>
    </header>
  );
};

export default Header;
