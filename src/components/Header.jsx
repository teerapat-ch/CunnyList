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
      <h1>Cunny List idk</h1>
      <span id="theme-btn" onClick={toggleTheme}>
        {theme == "light" ? <IoMoon size={40} /> : <MdSunny size={40} />}
      </span>
    </div>
  );
};

export default Header;
