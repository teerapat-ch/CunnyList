import "./Header.css";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="Header">
      <h1>React type shit</h1>
      <span id="theme-btn" onClick={toggleTheme}>
        {theme == "light" ? <MdSunny size={40} /> : <IoMoon size={40} />}
      </span>
    </div>
  );
};

export default Header;
