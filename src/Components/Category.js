import React from 'react'
import Style from './css/Category.module.css'


export default function Category({allCategorys, category, onChangeCategory}) {
  return (
        <ul className={Style.categorymenu}>
            {
                allCategorys.map((item)=>{
                    return(
                        <li className={`${item===category && Style.selected}`} onClick={()=>{
                            onChangeCategory(item)
                        }}>{item}</li>
                    )
                    
                })
            }
        </ul>
  )
}
