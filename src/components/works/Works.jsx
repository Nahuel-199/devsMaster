import { useContext } from 'react';
import { ThemeContext } from "../../context";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./work.css";

const Works = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='work_container section' id="trabajos">
        <h2 style={{color: darkMode && "#fff"}} className="section__title">Nuestros Trabajos</h2>
        <span className="section__subtitle"></span>

        <Swiper
        className="work__container_swiper"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          dynamicBullets: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
             {Data.map(({ id, image, link }) => {
                return (
                    <SwiperSlide className="work__card" key={id}>
                      <a href={link} target="_blank" rel="noreferrer">
                        <img src={image} alt="imagework" className='work__img' />
                        </a>
                    </SwiperSlide>
                );
             })}
        </Swiper>
        </section>
  )
}

export default Works