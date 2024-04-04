import React from 'react'
import Style from './css/MobileVisual.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './css/styles.css';
import { Pagination, Navigation } from 'swiper/modules';

export default function MobileVisual() {
  return (
    <section className={Style.visual}>
      <h2 class="hidden">비주얼영역</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className={Style.visual_list}>
          <SwiperSlide>
            <div className={Style.visual_00}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.visual_01}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={Style.visual_02}></div>
          </SwiperSlide>
        </div>
      </Swiper>
    </section>

  )
}
