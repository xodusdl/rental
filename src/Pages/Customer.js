import React from 'react'
import SubVisual from '../Components/SubVisual'
import Style from './css/Customer.module.css'

export default function Customer() {
  return (
    <>
    <SubVisual title='CUSTOMER'/>
    <section className={Style.customer}>
      <div className={Style.title_box}>궁금한 점이 있으세요?<br/>분야별 담당자들이 도와드리겠습니다.</div>
      <ul className={Style.customer_list}>
        <li>
          <p className={Style.question}><span>Q. </span>자전거 대여는 어떻게 하나요?</p>
          <p className={Style.answer}><span>A. </span>자전거는 회원 및 비회원 모두 이용이 가능합니다. 다만, 비회원은 일일권만 구매할 수 있습니다.</p>
        </li>
        <li>
          <p className={Style.question}><span>Q. </span>자전거 반납은 어떻게 하나요?</p>
          <p className={Style.answer}><span>A. </span>대여하신 곳과 상관없이 가까운 대여소에 반납하시면 됩니다.</p>
        </li>
        <li>
          <p className={Style.question}><span>Q. </span>대여나 반납은 24시간 가능한가요?</p>
          <p className={Style.answer}><span>A. </span>대여소는 24시간 동안 운영됩니다.</p>
        </li>
        <li>
          <p className={Style.question}><span>Q. </span>임시잠금 해제가 안 됩니다.</p>
          <p className={Style.answer}><span>A. </span>임시잠금 해제가 안 풀리는 경우, 앱 설정 및 핸드폰 내의 프로그램에서 오류가 발생되는 경우가 대부분입니다.</p>
        </li>
      </ul>
    </section>
    </>
  )
}
