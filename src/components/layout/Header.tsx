import React, { useState } from "react";
import EdulogButton from "../commons/EdulogButton";
import { useAuth } from "@/hooks/useAuth";
import HeaderStyle from "@/styles/Header.module.css";
import { BiSolidLogOut } from "react-icons/bi";
import EdulogContainer from "../commons/EdulogContainer";
import { delay } from "@/utils/helpers";
import Loading from "../commons/Loading";

const Header = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { logout } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <header className={HeaderStyle.header}>
      <EdulogContainer className={HeaderStyle.headerContainer}>
        <span>Edulog Hastane Yönetim</span>
        <div>
          <EdulogButton
            onClick={async () => {
              setIsLoading(true);
              await delay();
              logout();
            }}
            className={HeaderStyle.logoutButton}
            title="Çıkış"
          >
            <BiSolidLogOut style={{ fontSize: "24px" }} />
            Çıkış
          </EdulogButton>
        </div>
      </EdulogContainer>
    </header>
  );
};

export default Header;
