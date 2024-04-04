import React from 'react'
import Style from './css/SubVisual.module.css'

export default function SubVisual({title}) {

  return (
    <div className={Style.sub_visual}>
        <p className={Style.title}>{title}</p>
    </div>
  )
}
