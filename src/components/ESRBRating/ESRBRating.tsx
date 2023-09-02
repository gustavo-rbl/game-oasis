import { ESRBRatingTypes } from "../../types/types";
import Everyone from "../../assets/esrb_rating/E.svg";
import Everyone10 from "../../assets/esrb_rating/E10plus.svg";
import Teen from "../../assets/esrb_rating/T.svg";
import Mature from "../../assets/esrb_rating/M.svg";
import RatingPending from "../../assets/esrb_rating/RP.svg";
import { useEffect, useState } from "react";

function ESRBRating({ esrb_rating }: ESRBRatingTypes) {
  const [rating, setRating] = useState(RatingPending);

  useEffect(() => {
    let hasRating = true;

    if (esrb_rating) {
      switch (esrb_rating.id) {
        case 1:
          setRating(Everyone);
          break;
        case 2:
          setRating(Everyone10);
          break;
        case 3:
          setRating(Teen);
          break;
        case 4:
          setRating(Mature);
          break;

        default:
          setRating(RatingPending);
          break;
      }
    }

    return () => {
      hasRating = false;
    };
  }, [esrb_rating]);

  return <img src={rating} alt="ESRB Rating" />;
}

export default ESRBRating;
