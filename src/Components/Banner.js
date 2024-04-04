import React from 'react'
import Style from './css/Banner.module.css'

export default function Banner() {
  return (
    <section className={Style.banner}>
      <div className={Style.text}>
        Experience the joy of cycling and unleash your inner adventurer !
      </div>
    </section>
  )
}
