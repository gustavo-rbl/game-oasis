import { PlatformsTypes } from "../../types/types";
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";

function Platforms({ platforms }: PlatformsTypes) {
  return (
    <>
      <HeadingSecondary text="Platforms:" />

      <ul>
        {platforms.map((platform) => (
          <li key={platform.platform.id}>{platform.platform.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Platforms;
