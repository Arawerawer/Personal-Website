import "@/styles/navbar.scss";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = ["home", "services", "contact"];
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
          const { top, bottom } = element.getBoundingClientRect();

          if (top <= 100 && bottom >= 100) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setActiveSection(sectionId);
    isScrollingRef.current = true;
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="#" className="navbar-brand">
          李承澤
        </a>
        {darkMode ? (
          <Sun className="navbar-icon" onClick={toggleDarkMode} />
        ) : (
          <Moon className="navbar-icon" onClick={toggleDarkMode} />
        )}
      </div>

      <div className="navbar-right">
        <a
          href="#home"
          className={`navbar-home ${
            activeSection === "home"
              ? "text-red text-dark-yellow"
              : "text-gray text-dark-white"
          }`}
          onClick={(e) => handleNavClick(e, "home")}
        >
          首頁
          <span
            className={`line ${
              activeSection === "home"
                ? "bg-red bg-dark-yellow scale-x-100"
                : "bg-gray bg-dark-white scale-x-0"
            }`}
          ></span>
        </a>

        <a
          href="#services"
          className={`navbar-services ${
            activeSection === "services"
              ? "text-red text-dark-yellow"
              : "text-gray text-dark-white"
          }`}
          onClick={(e) => handleNavClick(e, "services")}
        >
          實作經驗
          <span
            className={`line ${
              activeSection === "services"
                ? "bg-red bg-dark-yellow scale-x-100"
                : "bg-gray bg-dark-white scale-x-0"
            }`}
          ></span>
        </a>

        <a
          href="#contact"
          className={`navbar-contact ${
            activeSection === "contact"
              ? "text-red text-dark-yellow"
              : "text-gray text-dark-white"
          }`}
          onClick={(e) => handleNavClick(e, "contact")}
        >
          聯絡方式
          <span
            className={`line ${
              activeSection === "contact"
                ? "bg-red bg-dark-yellow scale-x-100"
                : "bg-gray bg-dark-white scale-x-0"
            }`}
          ></span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
