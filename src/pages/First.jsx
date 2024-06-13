import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const First = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/Loginpage");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h2>First Page</h2>
      <Button
        onClick={handleClick}
        color="#a055ff"
        buttonText="Go To Home"
      ></Button>
    </div>
  );
};

export default First;
