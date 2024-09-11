import { useState } from "react";
import "./ThemeSwitcher.css";

export function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--bg", "rgb(255,237,216)");
    document.documentElement.style.setProperty("--bg-inverse", "rgb(35,35,35)");
  } else if (theme === "light") {
    document.documentElement.style.setProperty("--bg", "rgb(35,35,35)");
    document.documentElement.style.setProperty(
      "--bg-inverse",
      "rgb(255,237,216)"
    );
  }
}

function switchTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    localStorage.setItem("theme", "light");
    applyTheme("light");
  } else {
    localStorage.setItem("theme", "dark");
    applyTheme("dark");
  }
}

const ThemeSwitcher = () => {
  const [themeIcon, setThemeIcon] = useState("bi bi-sun-fill");

  return (
    <div
      className="theme-switcher"
      onClick={() => {
        switchTheme();
        setThemeIcon(
          themeIcon === "bi bi-sun-fill" ? "bi-moon-fill" : "bi bi-sun-fill"
        );
      }}
    >
      <i className={themeIcon}></i>
    </div>
  );
};
export default ThemeSwitcher;
