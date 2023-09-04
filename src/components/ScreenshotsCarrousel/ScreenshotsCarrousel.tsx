import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { CarrouselTypes } from "../../types/types";
import OptimizeImg from "../../modules/OptimizeImg";

// style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import style from "./ScreenshotsCarrousel.module.scss";

function ScreenshotsCarrousel({ screenshots }: CarrouselTypes) {
  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={style.swiper}
      >
        {screenshots.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={OptimizeImg(el.image)} alt="Game Screenshot" className={style.swiper_image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ScreenshotsCarrousel;
