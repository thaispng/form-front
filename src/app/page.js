"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../components/styles/global";
import { lightTheme, darkTheme } from "../components/styles/theme/index.js";
import Form from "@/components/form";

const Container = styled.div`

`;

const Switch = styled.div`
  display: inline-block;
  width: 60px;
  height: 34px;
  background: ${props => props.isActive ? '#009CDF' : '#ccc'};
  border-radius: 17px;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
`;

const Slider = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: ${props => props.isActive ? '25px' : '4px'};
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  transition: left 0.3s ease-in-out;

`;

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleToggle = () => {
    setIsActive(prevActive => !prevActive);
    setIsDarkTheme(prevIsDarkTheme => !prevIsDarkTheme); // Update isDarkTheme
  };
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Switch isActive={isActive} onClick={handleToggle} >
          <Slider isActive={isActive} />
        </Switch>
        <Form />
      </Container>
    </ThemeProvider>
  );
}
