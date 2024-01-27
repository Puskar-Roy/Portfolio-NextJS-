"use client";
import React, { createContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextProps {
  theme: string;
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<string>("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("theme");
      setCurrentTheme(value || "light");
    }
  }, []);

  const [theme, setTheme] = useState<string>(() => {
    return currentTheme;
  });

  const toggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(theme);
    
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
