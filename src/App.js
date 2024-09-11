import "./App.css";
import Hero from "./components/Hero/Hero";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ToTop from "./components/ToTop/ToTop";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { applyTheme } from "./components/ThemeSwitcher/ThemeSwitcher";

function App() {
  const [pagePosition, setPagePosition] = useState(window.scrollY);
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    }
    const theme = localStorage.getItem("theme");
    if (theme) applyTheme(theme);

    const handleScroll = () => {
      setPagePosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <ThemeSwitcher />
        {pagePosition > 0 && <ToTop />}
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
