import React, { useEffect, useState } from 'react'
import Style from './css/MobileProductsDetail.module.css'
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../api/firebase';
import MobileContentTitle from '../Components/MobileContentTitle';
import MobileFooter from './MobileFooter';

export default function MobileProductsDetail() {

  const {productId} = useParams()

  const [selectedItem, setSelectedItem] = useState({})

  useEffect(()=>{
    getProductDetail(productId).then((res)=>{
      setSelectedItem(res)
    })
    window.scrollTo(0,0)
  },[productId])

  return (
    <section className={Style.detail}>
      <MobileContentTitle title='상세페이지'/>
      <div className={Style.img}>
        <img src={selectedItem?.image} alt={selectedItem?.name}/>
      </div>
      <div className={Style.text_box}>
        {
          selectedItem.isBest===true ? <div className={Style.best}>BEST</div> : ''
        }
        <p className={Style.name}>{selectedItem?.name}</p>
        <p className={Style.text}>{selectedItem?.text}</p>
        <p className={Style.hashtag}>{selectedItem?.tag}</p>
      </div>
      <div className={Style.detal_img}>
      <img alt='' src={selectedItem?.detailImg ? selectedItem.detailImg : '/images/not_found_detail.jpg'}/>
      </div>
      <div>
      </div>
      <MobileFooter/>
    </section>
  )
}
