import { useEffect, useState } from "react";
import { MetacriticTypes } from "../../types/types";

function Metacritic({ metacritic }: MetacriticTypes) {
  const [color, setColor] = useState("");

  useEffect(() => {
    let isMounted = true;

    if (metacritic >= 75) {
      setColor("#66cc33");
    } else if (metacritic >= 50) {
      setColor("#ffcc33");
    } else {
      setColor("#ff0000");
    }

    return () => {
      isMounted = false;
    };
  }, [metacritic]);

  return <p style={{ backgroundColor: color }}>{metacritic}</p>;
}
export default Metacritic;
