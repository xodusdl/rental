import React from 'react'
import Style from './css/MobileInfo.module.css'

export default function MobileInfo() {
  return (
    <section className={Style.info}>
        <ul className={Style.info_list}>
            <li>
                <div className={Style.icon}><img src='/images/rental.svg' alt="렌탈"/></div>
                <p className={Style.text}>대여/반납</p>
            </li>
            <li>
              <div className={Style.icon}><img src='/images/payment.svg' alt="지불"/></div>
              <p className={Style.text}>결제/환불</p>
            </li>
            <li>
              <div className={Style.icon}><img src='/images/bicycle.svg' alt="자전거"/></div>
              <p className={Style.text}>방치/고장</p>
            </li>
            <li>
              <div className={Style.icon}><img src='/images/inquiry.svg' alt="문의"/></div>
              <p className={Style.text}>문의내역</p>
            </li>
        </ul>
        <div className={Style.login}>
          <p>로그인하여 <span>다양한 서비스</span>를 경험해보세요!</p>
          <button className={Style.login_btn}>로그인</button>
        </div>
    </section>
  )
}
