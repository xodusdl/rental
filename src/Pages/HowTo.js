import React from 'react'
import SubVisual from '../Components/SubVisual'
import Style from './css/HowTo.module.css'

export default function HowTo() {
  return (
    <>
    <SubVisual title='HOW TO'/>
    <section className={Style.howto}>
      <div className={Style.title_box}>로그인하고 이용권을 선택해보세요.<br/>놀라운 혜택이 기다립니다.</div>
      <div className={Style.use_box}>
        <ul className={Style.use_text_list}>
            <li>- <span>이용 가능시간</span>은 첫 회 대여시점을 기준으로 계산합니다.</li>
            <li>- 서울자전거 <span>모든 대여소에서 사용이 가능</span>합니다.</li>
            <li>- 취소, 환불은 서울자전거 아래 <span>환불규정</span>에 따릅니다.</li>
            <li>- 이용권을 다른 사람에게 <span>양도</span>할 수 없으며, 양도로 인해 발생하는 불이익은 구매자가 책임지셔야 합니다.</li>
        </ul>
        <div className={Style.use_info}>
            <p>이용권 구매</p>
            <div>
                <p className={Style.use_title}>정기권</p>
                <p className={Style.use_text}>30일권</p>
            </div>
            <div>
                <p className={Style.use_title}>일일권</p>
                <p className={Style.use_text}>1시간권, 2시간권</p>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}
