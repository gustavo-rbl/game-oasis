import { DevelopersTypes } from "../../types/types";
import HeadingSecondary from "../HeadingSecondary/HeadingSecondary";

function Developers({ developers }: DevelopersTypes) {
  return (
    <>
      <HeadingSecondary text={developers.length > 1 ? "Developers" : "Developer"} />

      <ul>
        {developers.map((dev) => (
          <li key={dev.id}>{dev.name}</li>
        ))}
      </ul>
    </>
  );
}

export default Developers;
