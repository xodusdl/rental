import React from 'react'
import Style from './css/MobileBrand.module.css'

export default function MobileBrand() {
  return (
    <section className={Style.brand}>
      <div className={Style.visual}>
        <p>Brand</p>
      </div>
      <div className={Style.title_box}>시원한 바람을 맞으며<br/>자유롭게 달리는 자전거,<br/>당신의 모험을 위한 최고의 동반자입니다.</div>
      <ul className={Style.brand_list}>
        <li>
            <div className={Style.img}><img src='/images/brand_00.svg' alt="apple"/></div>
            <div className={Style.text}>
              <p className={Style.text_title}>건강한 자전거 도시</p>
              <p className={Style.text_text}>자전거 이용의 생활화를 통한 시민건강 증진실현</p>
            </div>
        </li>
        <li>
            <div className={Style.img}><img src='/images/brand_01.svg' alt="apple"/></div>
            <div className={Style.text}>
              <p className={Style.text_title}>녹색 성장 선도 도시</p>
              <p className={Style.text_text}>국가 비전인 "저탄소 녹색성장"실현</p>
            </div>
        </li>
        <li>
            <div className={Style.img}><img src='/images/brand_02.svg' alt="apple"/></div>
            <div className={Style.text}>
              <p className={Style.text_title}>깨끗한 자전거의 도시</p>
              <p className={Style.text_text}>자전거 교통수단 부담률을 향상시켜 CO2 발생 감소실현</p>
            </div>
        </li>
      </ul>
    </section>
  )
}
