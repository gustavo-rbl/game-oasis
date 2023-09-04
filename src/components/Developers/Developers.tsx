import { DevelopersTypes } from "../../types/types";

// style
import globalStyle from "../../style/global/Global.module.scss";
import HeadingPrimary from "../HeadingPrimary/HeadingPrimary";

function Developers({ developers }: DevelopersTypes) {
  return (
    <>
      <HeadingPrimary text={developers.length > 1 ? "Developers:" : "Developer:"} />

      <ul className={globalStyle.list_buttons}>
        {developers.map((dev) => (
          <li key={dev.id}>{dev.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Developers;
