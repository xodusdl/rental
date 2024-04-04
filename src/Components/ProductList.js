import React, { useState } from 'react'
import Style from './css/ProductList.module.css'
import Category from './Category'
import useProducts from '../Hooks/useProducts'
import ProductLi from './ProductLi'

export default function ProductList() {

  const allCategorys=['All' , '성인', '주니어', '산악', '전기']

  const [category, SetCategory] = useState ('All')

  const changeCategory=(category)=>{
    SetCategory(category)
  }

  const [allBicycle] = useProducts()

  // 필터링
  const filterItems=getFilterItems(allBicycle, category)

  function getFilterItems(allBicycle, category){
      if(category==='All'){
          return (allBicycle)
      }else{
          return (
            allBicycle.filter((item)=>(item.category===category))
          )
      }
  }

  return (
    <>
    <section className={Style.category}>
      <nav className={Style.page_map}>
        <ul className={Style.page_map_list}>
          <li>홈</li>
          <li>카테고리</li>
        </ul>
      </nav>
      <Category allCategorys={allCategorys} category={category} onChangeCategory={changeCategory}/>
      <ul className={Style.bicycle_list}>
        {
          filterItems.map((item)=>{
            return (
              <ProductLi i={item}/>
            )
          })
        }
      </ul>
    </section>
    </>
    )
  }

       