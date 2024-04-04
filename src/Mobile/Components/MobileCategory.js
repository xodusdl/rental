import React from 'react'
import Style from './css/MobileCategory.module.css'

export default function MobileCategory() {
  return (
    <section className={Style.category}>
      <p className={Style.title}>Category</p>
        <ul className={Style.menu}>
          <li className={Style.selected}>성인</li>
          <li>주니어</li>
          <li>산악</li>
          <li>전기</li>
        </ul>

        <ul className={Style.product_list}>
          <li>
            <div className={Style.box_img}><img src='./images/adult00.jpg' alt="성인"/></div>
            <div className={Style.box_title}><span>성인 자전거</span><br/>롤리</div>
            <div className={Style.location}>
              <img src='./images/location.png' alt="위치"/>
            </div>
          </li>
          <li>
            <div className={Style.box_img}><img src='./images/adult01.jpg' alt="성인"/></div>
            <div className={Style.box_title}><span>성인 자전거</span><br/>호파</div>
            <div className={Style.location}>
              <img src='./images/location.png' alt="위치"/>
            </div>
          </li>
        </ul>

      {/* <div className={Style.all}>전체보기 &#62;</div> */}
      <button className={Style.all}>전체보기 &#62;</button>
    </section>
  )
}