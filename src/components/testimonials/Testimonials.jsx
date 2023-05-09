import { useContext } from 'react';
import { ThemeContext } from "../../context";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";

const Testimonials = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section className='testimonial container section' id="clientes">
        <h2 style={{color: darkMode && "#fff"}} className="section__title">Nuestros Clientes</h2>
        <span className="section__subtitle">Nuestros testimonios</span>

        <Swiper 
        className="testimonial__container"
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
             {Data.map(({ id, image, title, description }) => {
                return (
                    <SwiperSlide className="testimonial__card" key={id}>
                        <img src={image} alt="imageTestimonial" className='testimonial__img' />
                        <h3 className="testimonial__name">{title}</h3>
                        <p style={{color: darkMode && "#676767"}} className="testimonial__description">{description}</p>
                    </SwiperSlide>
                );
             })}
        </Swiper>
        </section>
  )
}

export default Testimonials