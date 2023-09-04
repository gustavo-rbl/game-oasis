import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaGamepad } from "react-icons/fa";
import { FaBars, FaX } from "react-icons/fa6";

// style
import style from "./Header.module.scss";

function Header() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleMenu = () => {
    setIsToggle((old) => !old);
  };

  const handleExpanded = (e) => {
    const { tagName } = e.target;

    if (window.scrollY !== 0) setIsToggle(false);

    if (tagName !== "A") return;

    if (isToggle) setIsToggle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleExpanded);

    return () => {
      window.removeEventListener("scroll", handleExpanded);
    };
  });

  return (
    <header className={style.header}>
      <Link to="/" className={style.header_hero}>
        <FaGamepad className={style.header_hero_logo} />
        <h2 className={style.header_hero_name}>Game Oasis</h2>
      </Link>

      <nav className={`${style.header_nav} ${isToggle ? style.header_nav_active : null}`}>
        <ul className={style.header_navLinks} onClick={handleExpanded}>
          <li>
            <NavLink
              to="."
              className={({ isActive }) => (isActive ? style.header_navLinks_active : undefined)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="store"
              className={({ isActive }) => (isActive ? style.header_navLinks_active : undefined)}
            >
              Store
            </NavLink>
          </li>

          <li>
            <NavLink
              to="cart"
              className={({ isActive }) => (isActive ? style.header_navLinks_active : undefined)}
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={style.header_menu} onClick={toggleMenu}>
        {isToggle ? <FaX /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;
