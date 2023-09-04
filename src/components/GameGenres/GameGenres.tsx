import { useEffect, useState } from "react";
import { GameTypes, GenresTypes } from "../../types/types";
import getGenres from "../../modules/GetGenres";
import OptimizeImg from "../../modules/OptimizeImg";
import { useSearchParams } from "react-router-dom";
import useGenreFilter from "../../store/genreStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { FaX } from "react-icons/fa6";

// style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";
import style from "./GameGenres.module.scss";

function GameGenres(data: GameTypes[]) {
  const genres = getGenres(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const genresFilter = searchParams.get("genre");
  const genresFilterState = useGenreFilter((state) => state.genreFilter);
  const setGenresFilter = useGenreFilter((state) => state.setGenreFilter);
  const [slides, setSlides] = useState(1);

  const setFilter = (genre: GenresTypes) => {
    setSearchParams({ genre: genre.slug });
    setGenresFilter(genre);
  };

  const clearFilter = () => {
    setSearchParams({});
    setGenresFilter(null);
  };

  const handleWindowSize = () => {
    const size = window.innerWidth;

    if (size > 1040) {
      setSlides(4);
    } else if (size > 810) {
      setSlides(3);
    } else if (size > 550) {
      setSlides(2);
    } else {
      setSlides(1);
    }
  };

  useEffect(() => {
    handleWindowSize();

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={slides}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={style.swiper}
      >
        {genres.map((genre: GenresTypes) => (
          <SwiperSlide key={genre.id} className={style.swiper_slide}>
            <div onClick={() => setFilter(genre)} className={style.swiper_slide_card}>
              <img src={OptimizeImg(genre.img)} alt={genre.name} className={style.swiper_image} />
              <h2>{genre.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <hr />

      <h2 className={style.swiper_filter}>
        {genresFilter ? (
          <>
            <p className={style.font_small}>Filtered By:</p>{" "}
            <p>
              {genresFilterState?.name} <FaX onClick={clearFilter} className={style.clear_filter} />
            </p>
          </>
        ) : (
          "Games:"
        )}
      </h2>
    </>
  );
}

export default GameGenres;
