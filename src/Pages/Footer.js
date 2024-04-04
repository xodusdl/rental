import React from 'react'
import Style from './css/Footer.module.css'

export default function Footer() {
  return (
    <div className={Style.footer_wrap}>
        <footer>
            <ul className={Style.footer_menu}>
              <li><a href="#;">이용약관</a></li>
              <li><a href="#;">위치정보관련 약관</a></li>
              <li><a href="#;">개인정보처리방침</a></li>
              <li><a href="#;">보험안내</a></li>
            </ul>
            
            <p className={Style.copyright}>주소지: 서울특별시 중구 창경궁로 17 대표자 OOO<br/>COPYRIGHT © 2024 SEOUL BICYCLE (주) ALL RIGHTS RESERVED.</p>
            <div className={Style.footer_logo}></div>
            <div className={Style.linked}>
              <div><a href="#;"><img src='/images/apple.svg' alt="apple"/></a></div>
              <div><a href="#;"><img src='/images/google.svg' alt="apple"/></a></div>
            </div>
        </footer>
    </div>
  )
}
