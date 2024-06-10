import React, { useState } from "react";
import styled from "styled-components";
import { Section } from "../pages/Home";

const MonthWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

`;

const MonthButton = styled.button`
  text-align : center ;
  font-size : 18px;
  font-style: normal;
  font-weight: 600px;
  line-height: normal;

  display: flex;
  height: 60px;
  padding: 20px;
  width: 104px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  color:  ${(props) => 
    props.selected
        ? "white"
        : "black"};

  border-radius: 10px;
  border: none;
  cursor: pointer;
  background:${(props) => 
    props.selected
        ? "skyblue"
        :"00ffa2"};
        
        &hover {
            background: yellow;
            color: black;
        }
`;
const Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



const MonthNavigation = ({month, setMonth}) => {

    

  return (
    <Section>
      <MonthWrapper>
        {Months.map((element) => (
          <MonthButton 
            key={element}
            selected = {element === month}
            onClick={() => {
                setMonth(element);
            }}
          >{`${element}월`}</MonthButton>
        ))}
      </MonthWrapper>
    </Section>
  );
};

export default MonthNavigation;
