import React from 'react'
import Style from './css/Rental.module.css'

export default function Rental() {
  return (
    <section className={Style.renatal}>
        <p className={Style.title}>대여소 안내</p>
        <ul className={Style.renatal_info}>
            <li>
                <div className={Style.box_title}>대여소란?</div>
                <p className={Style.text}>자전거를 대여하고 반납할 수 있는 무인 정류장 형태의 자전거 거치 시설입니다.</p>
                <img src='./images/ren00.jpg' alt=""/>
            </li>
            <li>
                <div className={Style.box_title}>대여소의 위치</div>
                <p className={Style.text}>대여소는 버스정류장, 주택단지, 학교, 은행 등 접근이 편리한 주변 생활시설 및 통행장소를 중심으로 운영하고 있습니다.</p>
                <img src='./images/ren01.jpg' alt=""/>
            </li>
            <li>
                <div className={Style.box_title}>이용안내</div>
                <p className={Style.text}>대여소가 설치된 곳이면 앱을 통해 자전거를 대여하고 반납할 수 있습니다.</p>
                <img src='./images/ren02.jpg' alt=""/>
            </li>
            <li>
                <div className={Style.box_title}>대여소 찾기</div>
                <img src='./images/ren03.jpg' alt=""/>
            </li>
        </ul>
    </section>
  )
}
