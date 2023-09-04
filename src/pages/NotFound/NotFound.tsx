import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadingPrimary from "../../components/HeadingPrimary/HeadingPrimary";

// style
import style from "./NotFound.module.scss";
import globalStyle from "../../style/global/Global.module.scss";

// assets
import notFoundImg from "../../assets/img/404.svg";

function NotFound() {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);

    const redirect = setTimeout(() => {
      navigate("/");
    }, 20000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <div className={`${style.notFound} ${globalStyle.fadeIn}`}>
      <div className={style.card}>
        <div className={style.card_banner}>
          <img src={notFoundImg} alt="Not found image" className={style.card_image} />
        </div>

        <div className={style.card_message}>
          <HeadingPrimary text="Uh oh..." />
          <p>We are experiencing problems</p>
          <p>Please try again later</p>
          <p>We will take you to our home page!</p>
        </div>
        <div className={`${style.card_progress} ${globalStyle.errorSlideRight}`}></div>
        <p className={style.card_timer}>{timer}</p>
      </div>
    </div>
  );
}

export default NotFound;
