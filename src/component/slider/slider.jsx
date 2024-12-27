import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  return (
    <div className="slider">
        <h1>Галерея проведенных событий:</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://cf.ltkcdn.net/charity/images/orig/261203-5130x3420-Volunteers_soup_kitchen.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.weareteachers.com/wp-content/uploads/GettyImages-1268421814-e1607704004471.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://resources.ecb.co.uk/photo-resources/2022/09/22/c11dcc64-786d-478c-9194-8a1cf513ac3e/A-volunteer-from-the-Dream-Big-programme-runs-an-All-Stars-Cricket-session.jpeg?width=1800&height=750" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://youthforeurope.eu/wp-content/uploads/2022/06/img1277.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSWL-bpbtmeoKwda1UKLEYlCWTneTF1qdQhA&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5jEIuhSOwnpNQHcTk-vvEu94H-sEWpeU7A&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://benevity.com/hubfs/Alaya%20Website%20Migration%20Images/ismael-paramo-Cns0h4ypRyA-unsplash-scaled.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.cheapoguides.com/wp-content/uploads/sites/2/2020/03/Japan-Volunteering-iStock-963385912-recep-bg.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj_NCsZeBMrsmoZtyR3XvaV5BY2FWYyQyI2W3jxI62v4BZQiZU6HwsVLvmky8JOXkP7iY&usqp=CAU" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}