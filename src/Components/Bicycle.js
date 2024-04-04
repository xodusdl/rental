import React, { useState } from 'react'
import Style from './css/Bicycle.module.css'
import { Link } from 'react-router-dom'
import useProducts from '../Hooks/useProducts'

export default function Bicycle() {

  const allCategorys=['All' , '성인', '주니어', '산악', '전기']
  const [category, SetCategory] = useState ('All')

  const changeCategory=(category)=>{
    SetCategory(category)
  }
  // 엑시오스
  const [allBicycle] = useProducts()

  let filterItems=getFilterItems(allBicycle, category)
  //console.log(filterItems)

  function getFilterItems(allBicycle, category){
      if(category==='All'){
          return (allBicycle)
      }else{
          return (
            allBicycle.filter((item)=>(item.category===category))
            // allBicycle.filter((item, index)=>(item.category===category))
          )
      }
  }

  return (
    <section className={Style.bicycle}>
      <p className={Style.title}>자전거 카테고리</p>
      <ul className={Style.menu}>
        {
          allCategorys.map((item)=>{
              return(
                  <li className={`${item===category && Style.selected}`} onClick={()=>{
                    changeCategory(item)
                  }}>{item}</li>
              )
              
          })
        }
      </ul>
      <ul className={Style.list}>
        {
          filterItems.map((item, index)=>( index<3 && <li> <Link to={`/product/${item.id}`}><img src={item.image} alt="상품이미지"/><p>{item.category}<br/><span>{item.name}</span></p></Link></li>))
        }
      </ul>
      <button className={Style.view_more}><Link to='/product'>자전거 전체보기</Link></button>
    </section>
  )
}