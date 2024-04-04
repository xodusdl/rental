import React from 'react'
import Style from './css/ProductLi.module.css'
import { Link } from 'react-router-dom'

export default function ProductLi({i}) {
  return (
    <li className={Style.productLi}>
        <Link to={`/product/${i.id}`}>
        <img src={i.image} alt="상품이미지"/>
            {
            i.isBest===true ? <p className={Style.best_b}>best</p> : ''
            }
        <p className={Style.bicycle_name}>{i.name}</p>
        <p className={Style.bicycle_explain}>{i.text}</p>
        </Link>
    </li>
  )
}
