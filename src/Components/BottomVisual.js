import React from 'react'
import Style from './css/BottomVisual.module.css'

export default function BottomVisual() {
  return (
    <section className={Style.bottom_visual}>
        <div className={Style.box}>
            <p className={Style.bottom_title}>건강한 자전거 도시</p>
            <p className={Style.bottom_text}>자전거 이용의 생활화를 통한<br/>시민 건강 증진 실현</p>
        </div>
        <div className={Style.box}>
            <p className={Style.bottom_title}>녹색 성장 선도 도시</p>
            <p className={Style.bottom_text}>국가 비전인 “저탄소 녹색성장” 실현</p>
        </div>
        <div className={Style.box}>
            <p className={Style.bottom_title}>깨끗한 자전거 도시</p>
            <p className={Style.bottom_text}>자전거 교통수단 분담률을 향상시켜<br/>CO2 발생 감소 실현</p>
        </div>
        <div className={Style.box}>
            <p className={Style.bottom_title}>편리한 자전거 도시</p>
            <p className={Style.bottom_text}>곳곳에 배치된 자전거로<br/>이동 편리성 증진 실현</p>
        </div>
    </section>
  )
}
