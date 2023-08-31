import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { CarrouselTypes } from "../../types/types";
import OptimizeImg from "../../modules/OptimizeImg";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

function ScreenshotsCarrousel({ screenshots }: CarrouselTypes) {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {screenshots.map((el) => (
          <SwiperSlide key={el.id}>
            <img src={OptimizeImg(el.image)} alt="Game Screenshot" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ScreenshotsCarrousel;
