import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleIDChange = (event) => {
    setId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      const data = response.data;
      if (data.success) {
        login(data.accessToken);
        navigate("/");
      } else {
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      alert("로그인 실패");
    }
  };

  const routeJoin = (event) => {
    navigate("/Joinpage");
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
            onChange={handleIDChange}
          />

          <InputField
            id="password"
            type="password"
            label="비밀번호"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />

          <StyledJoin>
            <Button
              onClick={handleSubmit}
              color="#a055ff"
              buttonText="로그인"
            ></Button>
            <Button
              onClick={routeJoin}
              color="#a055ff"
              buttonText="회원가입"
            ></Button>
          </StyledJoin>
        </FormBox>
      </JoinBox>
    </>
  );
};

export default Login;

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
