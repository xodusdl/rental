import React from 'react'
import Style from './css/MobileRental.module.css'

export default function MobileRental() {
  return (
    <section className={Style.rental}>
        <p className={Style.title}>대여소 안내</p>
        <ul className={Style.rental_box}>
            <li>
                <div className={Style.rental_img}></div>
                <div className={Style.rental_text}>
                    <p>1. 대여소란?</p>
                    <p>자전거를 대여하고 반납할 수 있는 무인 정류장 형태의 자전거 거치 시설입니다.</p>
                </div>
            </li>
            <li>
                <div className={Style.rental_img}></div>
                <div className={Style.rental_text}>
                    <p>2. 대여소의 위치</p>
                    <p>접근이 편리한 주변 생활시설 및 통행장소를 중심으로 운영하고 있습니다.</p>
                </div>
            
            </li>
            <li>
                <div className={Style.rental_img}></div>
                <div className={Style.rental_text}>
                    <p>3. 어플안내</p>
                    <p>앱스토어와 구글스토에서 누구나 다운 받아 이용하실 수 있습니다.</p>
                </div>
            </li>

        </ul>
    </section>
  )
}