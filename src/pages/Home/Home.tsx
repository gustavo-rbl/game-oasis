import { Link } from "react-router-dom";
import mainBg from "../../assets/video/main-bg.mp4";

// component
import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";

// style
import style from "./Home.module.scss";
import globalModule from "../../style/global/Global.module.scss";

function Home() {
  return (
    <>
      <video autoPlay muted loop className={style.video}>
        <source src={mainBg} type="video/mp4" />
      </video>

      <section className={`${style.home} ${globalModule.fadeIn}`}>
        <div className={style.home_container}>
          <HeadingPrimary text="Game Oasis" />

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis quasi repellat earum
            facere accusamus. At magni laborum veniam, quisquam, dolor ut, ab eum officiis nemo quos
            in porro quae ex.
          </p>

          <Link to="store" className={style.home_button}>
            Browse &rarr;
          </Link>
        </div>

        <div className={style.home_container}>
          <HeadingPrimary text="Quick Links" />

          <ul>
            <li>
              <Link to="store" className={style.home_button}>
                Store &rarr;
              </Link>
              <Link to="cart" className={style.home_button}>
                Cart &rarr;
              </Link>
              <Link to="notFound" className={style.home_button}>
                Not Found &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
