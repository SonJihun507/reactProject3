import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useState } from "react";
import axios from "axios";

const Join = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id.trim()) {
      alert("아이디를 입력해 주세요.");
      return;
    }

    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4자 이상 10자 이하로 입력해 주세요.");
      return;
    }

    if (!password.trim()) {
      alert("비밀번호를 입력해 주세요.");
      return;
    }

    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4자 이상 15자 이하로 입력해 주세요.");
      return;
    }

    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1자 이상 10자 이하로 입력해 주세요.");
      return;
    }

    if (!nickname.trim()) {
      alert("닉네임을 입력해 주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        {
          id,
          password,
          nickname,
        }
      );
      const data = response.data;
      if (data.success) {
        alert("회원가입 성공!");
        navigate("/Loginpage");
      } else {
        alert("회원가입 오류");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 오류");
    }
  };

  const routeLogin = (event) => {
    navigate("/Loginpage");
  };

  return (
    <>
      <JoinBox>
        <FormBox>
          <InputField
            id="ID"
            type="ID"
            label="아이디"
            placeholder="ID"
            value={id}
            onChange={handleIdChange}
          />

          <InputField
            id="password"
            type="password"
            label="비밀번호"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />

          <InputField
            id="nickname"
            type="nickname"
            label="닉네임"
            placeholder="Nickname"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <StyledJoin>
            <Button
              //type="submit"
              onClick={handleSubmit}
              color="#a055ff"
              buttonText="회원가입"
            ></Button>
            <Button
              onClick={routeLogin}
              color="#a055ff"
              buttonText="로그인"
            ></Button>
          </StyledJoin>
        </FormBox>
      </JoinBox>
    </>
  );
};

export default Join;

const FormBox = styled.form`
  width: 400px;
  height: 300px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  gap: 10px;
  padding: 20px;
  margin: 5% auto;
  padding-top: 30px;
  background-color: #afaeae;
`;

const StyledJoin = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const JoinBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
