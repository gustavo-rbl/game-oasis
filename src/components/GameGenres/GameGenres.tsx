import { useEffect, useState } from "react";
import { GameTypes, GenresTypes } from "../../types/types";
import getGenres from "../../modules/GetGenres";
import OptimizeImg from "../../modules/OptimizeImg";
import { useLocation, useSearchParams } from "react-router-dom";
import useGenreFilter from "../../store/genreStore";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./style.css";

function GameGenres(data: GameTypes[]) {
  const genres = getGenres(data);
  const [searchParams, setSearchParams] = useSearchParams();
  const genresFilter = searchParams.get("genre");
  const genresFilterState = useGenreFilter((state) => state.genreFilter);
  const setGenresFilter = useGenreFilter((state) => state.setGenreFilter);
  const [slides, setSlides] = useState(1);
  const { pathname } = useLocation();

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
    if (pathname) handleWindowSize();

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [pathname]);

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
        className="mySwiper"
      >
        {genres.map((genre: GenresTypes) => (
          <SwiperSlide key={genre.id} onClick={() => setFilter(genre)}>
            <div>
              <img src={OptimizeImg(genre.img)} alt={genre.name} />
              <h3>{genre.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>
        {genresFilter ? (
          <>
            <span>Filtered By:</span> <span>{genresFilterState?.name}</span>{" "}
            <span onClick={clearFilter}>Clear filter</span>
          </>
        ) : (
          "Popular Games"
        )}
      </h2>
    </>
  );
}

export default GameGenres;
