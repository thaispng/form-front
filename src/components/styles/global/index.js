"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        transition: 0.1s;
    } 
    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};        
    }
    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }
  `;

  export default GlobalStyle;