import React, { useState, useEffect } from "react";
import "./DarkMode.css";
import sunIcon from "../assets/images/sun-light.webp"; // Path to your sun imagemkmk
import moonIcon from "../assets/images/moon.webp"; // Path to your moon image

const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark" || false
  );

  useEffect(() => {
    if (isDarkMode) {
      setDark();
    } else {
      setLight();
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="toggle-theme-wrapper">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        <img
          src={isDarkMode ? sunIcon : moonIcon}
          alt={isDarkMode ? "Light mode" : "Dark mode"}
          className="theme-icon"
        />
      </button>
    </div>
  );
};

export default DarkMode;
