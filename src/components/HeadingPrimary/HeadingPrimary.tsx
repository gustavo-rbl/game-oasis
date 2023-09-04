import { HeadingTypes } from "../../types/types";

// style
import style from "./HeadingPrimaty.module.scss";

function HeadingPrimary({ text }: HeadingTypes) {
  return <h2 className={style.heading}>{text}</h2>;
}

export default HeadingPrimary;
