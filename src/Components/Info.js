import React from 'react'
import Style from './css/Info.module.css'
import { LuUser } from "react-icons/lu";

export default function Info() {
  return (
    <section className={Style.info}>
        <p className={Style.info_title}>세계적인 자전거 도시 서울</p>
        <p className={Style.info_text}><span>언제나, 어디서나 쉽고 편리하게</span> 이용할 수 있는 저탄소 이동수단 서울 자전거<br/>
        서울시의 교통체중, 대기오염 문제를 해결하고 건강한 사회 및 삶의 질을 높이고자 마련되었습니다.</p>
        <div className={Style.info_box}>
          <p className={Style.user_icon}><LuUser /></p>
          <p className={Style.user_text}>로그인하여 <span>다양한 서비스</span>를<br/>경험해 보세요!</p>
          <button className={Style.user_btn}>로그인하기</button>
          <ul className={Style.info_list}>
            <li>
                <img src='./images/rental.svg' alt="렌탈"/>
                <p>대여/반납</p>
            </li>
            <li>
              <img src='/images/payment.svg' alt="지불"/>
              <p>결제/환불</p>
            </li>
            <li>
              <img src='/images/bicycle.svg' alt="자전거"/>
              <p>방치/발견</p>
            </li>
            <li>
              <img src='./images/inquiry.svg' alt="문의"/>
              <p>문의내역</p>
            </li>
          </ul>
        </div>
    </section>
  )
}
