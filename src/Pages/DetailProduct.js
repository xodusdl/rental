import React, { useEffect, useState } from 'react'
import Style from './css/DetailProduct.module.css'
import SubVisual from '../Components/SubVisual'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../api/firebase'

export default function DetailProduct() {

  const {productId} = useParams()

  const [selectedItem, setSelectedItem] = useState({})

  useEffect(()=>{
    getProductDetail(productId).then((res)=>{
      setSelectedItem(res)
    })
    window.scrollTo(0,0)
    
  },[productId])

  return (
    <>
    <SubVisual title={selectedItem?.name}/>
    <section className={Style.detail_product}>
      <nav className={Style.page_map}>
        <ul className={Style.page_map_list}>
          <li>홈</li>
          <li>카테고리</li>
          <li>{selectedItem?.category}</li>
          <li>{selectedItem?.name}</li>
        </ul>
      </nav>
      <div className={Style.detail}>
        <div className={Style.detail_img}>
          <img src={selectedItem?.image} alt={selectedItem?.name}/>
        </div>
        <div className={Style.detail_info}>
          <div className={Style.detial_title}>
            <p>{selectedItem?.category}</p>
            <p>{selectedItem?.name}</p>
          </div>
          <div className={Style.detial_sub_title}>{selectedItem?.text}</div>
          <div className={Style.detial_tag}>{selectedItem?.tag}</div>
          <ul className={Style.detial_info_list}>
            <li>프레임사이즈</li>
            <li>{selectedItem?.framSize}</li>
            <li>휠사이즈</li>
            <li>{selectedItem?.wheelSize}</li>
            <li>프레임 모양</li>
            <li>{selectedItem?.framShape}</li>
            <li>색상</li>
            <li>{selectedItem?.color}</li>
          </ul>
          <button className={Style.find_btn}>가까운 대여소 찾기</button>
        </div>
      </div>
      <div className={Style.detail_bicycle}>
        <img alt='' src={selectedItem?.detailImg ? selectedItem.detailImg : '/images/not_found_detail.jpg'}/>
      </div>
      <ul className={Style.use_text_list}>
        <li>- <span>이용 가능시간</span>은 첫 회 대여시점을 기준으로 계산합니다.</li>
        <li>- 서울자전거 <span>모든 대여소에서 사용이 가능</span>합니다.</li>
        <li>- 취소, 환불은 서울자전거 아래 <span>환불규정</span>에 따릅니다.</li>
        <li>- 이용권을 다른 사람에게 <span>양도</span>할 수 없으며, 양도로 인해 발생하는 불이익은 구매자가 책임지셔야 합니다.</li>
      </ul>
    </section>
    </>
  )
}