"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        transition: 0.1s;
    } 
    .container {
        margin: auto;
        width: 50%;        
        padding: 10px;
        text-align: center;        
    }
    body {
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};        
    }
    h1 {
        color: ${props => props.theme.titles};        
    }
    .accent {
        background-color: ${props => props.theme.accent};
        color: ${props => props.theme.text};
        height: 30px;
    }
  `;

  export default GlobalStyle;