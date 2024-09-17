import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ToTop from "./components/ToTop/ToTop";
import Footer from "./components/Footer/Footer";
import CustomCursor from "./components/CustomCursor/CustomCursor";
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
        <CustomCursor />
        {pagePosition > 0 && <ToTop />}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
