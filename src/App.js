import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme, lightTheme } from "./theme/theme";
import SplashPage from "./components/splash/SplashPage";



function App() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") === "light" ? lightTheme : theme
  );

  useEffect(() => {
    // Save the current theme to localStorage whenever it changes
    const themeName = currentTheme === theme ? "dark" : "light";
    localStorage.setItem("theme", themeName);
  }, [currentTheme]);

  const changeTheme = () => {
    setCurrentTheme(currentTheme === theme ? lightTheme : theme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <Router>
        <CssBaseline />
        <SplashPage changeTheme={changeTheme} currentTheme={currentTheme} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
