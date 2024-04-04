import React from 'react'
import Style from './css/MobileContentTitle.module.css'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";

export default function MobileContentTitle({title}) {
  return (
    <div className={Style.title_box}>
        <Link to='/mobile/product'>
        <div className={Style.back_narrow}><GoArrowLeft /></div>
        </Link>
        <p className={Style.title}>{title}</p>
    </div>
  )
}
