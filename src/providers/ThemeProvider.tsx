"use client";
import React, { useContext, ReactNode } from "react";
import { ThemeContext } from "@/context/ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>{children}</div>;
};

export default ThemeProvider;
