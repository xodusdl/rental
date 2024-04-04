import React from 'react'
import Style from './css/Visual.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Visual() {

  return (
    <section className={Style.visual}>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
        <div className={Style.visual_list}>
            <SwiperSlide>
                <div className={Style.visual00}>
                    <div className={Style.visual_text_box}>
                        <p className={Style.visual_title}>빠르고 편리한 이동!</p>
                        <p className={Style.visual_text}>어디든지 쉽게 이동하고 환경도 보호하는 자전거 대여, 지금 시작해보세요.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={Style.visual01}>
                    <div className={Style.visual_text_box}>
                        <p className={Style.visual_title}>자연과 어울리는 자전거 여행!</p>
                        <p className={Style.visual_text}>건강과 활력을 얻을 수 있는 자전거 여행</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={Style.visual02}>
                    <div className={Style.visual_text_box}>
                        <p className={Style.visual_title}>새로운 출퇴근 스타일!</p>
                        <p className={Style.visual_text}>자동차 대신 자전거 대여로 친환경적인 이동에 참여해요.</p>
                    </div>
                </div>
            </SwiperSlide>
        </div>
        </Swiper>
    </section>
  )
}