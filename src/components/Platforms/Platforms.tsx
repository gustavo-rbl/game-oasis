import { PlatformsTypes } from "../../types/types";

// component
import HeadingPrimary from "../HeadingPrimary/HeadingPrimary";

// style
import globalStyle from "../../style/global/Global.module.scss";

function Platforms({ platforms }: PlatformsTypes) {
  return (
    <>
      <HeadingPrimary text="Platforms:" />

      <ul className={globalStyle.list_buttons}>
        {platforms.map((platform) => (
          <li key={platform.platform.id}>{platform.platform.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Platforms;
