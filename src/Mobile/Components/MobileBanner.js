import React from 'react'
import Style from './css/MobileBanner.module.css'

export default function MobileBanner() {
  return (
    <section className={Style.banner}>
      <div className={Style.info_img}>
        <div className={Style.img_text_box}>
          <p>Experience the joy of cycling and unleash your inner<br/>adventurer !</p>
        </div>
      </div>
    </section>
  )
}
