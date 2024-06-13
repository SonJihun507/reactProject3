import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Button from "./Button";

const Header = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말로 로그아웃 하시겠습니까?");
    if (confirmLogout) {
      logout();
      navigate("/Firstpage");
    }
  };

  const handleToProfile = () => {
    navigate("/MyProfile");
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
        backgroundColor: "lightgray",
      }}
    >
      <h1>
        <Link
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "30px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          to="/"
        >
          나만의 가계부
        </Link>
      </h1>
      <nav
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        {isAuthenticated ? (
          <>
            <Button
              onClick={handleToProfile}
              color="#a055ff"
              buttonText={"내프로필"}
            ></Button>
            <Button
              onClick={handleLogout}
              color="#a055ff"
              buttonText={"로그아웃"}
            ></Button>
          </>
        ) : (
          <>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              to="/Loginpage"
            >
              로그인
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              to="/Joinpage"
            >
              회원가입
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
