import React from "react";
import "./DarkMode.css";
import { changeEventHandler } from "react";
const DarkMode = () => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };
  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };
  const storedItem= localStorage.getItem("theme");

  
  return(
    <>
    </>
  )
};

export default DarkMode;
