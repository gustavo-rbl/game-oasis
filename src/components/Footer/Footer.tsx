import { Link } from "react-router-dom";
import { FaGamepad, FaGithub } from "react-icons/fa";

// style
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_container}>
        <div className={style.footer_hero}>
          <FaGamepad />
          <h2>Game Oasis</h2>
        </div>

        <nav className={style.footer_nav}>
          <ul>
            <li>Customer Service</li>
            <li>Contact Us</li>
            <li>Order Status</li>
            <li>Exclusions</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>

          <ul>
            <li>My Account</li>
            <li>Sign In</li>
            <li>Update Password</li>
            <li>Order Status</li>
          </ul>

          <ul>
            <li>About</li>
            <li>Community</li>
            <li>Sustainability</li>
            <li>Carers</li>
          </ul>
        </nav>

        <hr />

        <p>
          Game images and data provided by{" "}
          <Link to="https://rawg.io/" target="_blank">
            RAWG.io
          </Link>
        </p>

        <hr />

        <p className={style.footer_github}>
          <Link to="https://github.com/gustavo-rbl" target="_blank">
            <FaGithub className={style.footer_github_icon} />
          </Link>
          gustavo-rbl
        </p>
      </div>
    </footer>
  );
}

export default Footer;
