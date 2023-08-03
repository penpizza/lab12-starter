"use client";
import Controller from "@/components/Controller";
import { Detail } from "@/components/Detail";
import { Header } from "@/components/Header";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useState } from "react";

export default function HomePage() {
  const THEMES = {
    LIGHT: {
      name: "light",
      bgColor: "white",
      fgColor: "black",
    },
    DARK: {
      name: "dark",
      bgColor: "black",
      fgColor: "white",
    },
  };

  const [theme,setTheme] = useState(THEMES.DARK);

  const setLightTheme = () => {};
  const setDarkTheme = () => {};
  const toggleTheme = () => {};

  return (
    <div style={{backgroundColor:theme.bgColor ,minHeight:"100vh"}}>
      <ThemeContext.Provider value={{theme}}>
      <Header />
      <Detail />
      <Controller />
      </ThemeContext.Provider>
    </div>
  );
}
