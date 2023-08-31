import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Footer.css";

function Footer() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className={`footer-container ${!darkMode && "footer-light"}`}>
      Footer
    </div>
  );
}

export default Footer;
