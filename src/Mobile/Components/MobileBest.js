import React from 'react'
import Style from './css/MobileBest.module.css'

export default function MobileBest() {
  return (
    <section className={Style.best}>
      <p className={Style.title}>Best Bicycle</p>
        <div className={Style.best_list}>
            <div className={Style.best_box}>
                <div>전기</div>
                <img src='./images/electric01.jpg' alt="전기"/>
                <p className={Style.box_title}>팬텀</p>
                <p className={Style.box_text}>가볍게 탈 수 있는 전기 자전거</p>
            </div>
            <div className={Style.best_box}>
                <div>성인</div>
                <img src='./images/adult03.jpg' alt="성인"/>
                <p className={Style.box_title}>투모로우</p>
                <p className={Style.box_text}>쉽게 사용할 수 있는 접이식 자전거</p>
            </div>
            <div className={Style.best_box}>
                <div>주니어</div>
                <img src='./images/junior01.jpg' alt="주니어"/>
                <p className={Style.box_title}>팝</p>
                <p className={Style.box_text}>꾸준히 사랑받는 주니어 자전거</p>
            </div>
        </div>
      <button className={Style.view_more}>더보기 &#62;</button>
    </section>
  )
}
