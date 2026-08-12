import React, { createContext, useContext, useEffect, useState } from "react";

/* ============================================================
   Theme Context — handles dark/light state + persistence
   ============================================================ */

const ThemeContext = createContext(null);

export function ThemeProvider({ children, defaultTheme = "dark" }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = window.localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") return saved;
    }
    return defaultTheme;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("portfolio-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside a <ThemeProvider>");
  return ctx;
}

/* ============================================================
   Toggle Button — sun/moon switch
   ============================================================ */

export function ThemeToggleButton({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className={`theme-toggle-btn ${className}`}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      <span className="theme-toggle-track">
        <span className={`theme-toggle-thumb ${isDark ? "" : "is-light"}`}>
          {isDark ? "☾" : "☀"}
        </span>
      </span>
    </button>
  );
}