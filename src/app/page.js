"use client";
import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../components/styles/global';
import { lightTheme, darkTheme } from '../components/styles/theme/index.js';


export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  return (
<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>

  <GlobalStyle />
  
</ThemeProvider>      
  );
}
