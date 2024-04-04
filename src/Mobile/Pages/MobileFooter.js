import React from 'react'
import Style from './css/MobileFooter.module.css'

export default function MobileFooter() {
  return (
    <footer className={Style.footer}>
      <p className={Style.copyright}>서울특별시 중구 창경궁로 17<br/>
      Tel: 0000-0000<br/>
      COPYRIGHT © 2024 SEOUL BICYCLE (주) ALL RIGHTS RESERVED.
      </p>
      <div className={Style.footer_logo}></div>

    </footer>
  )
}
