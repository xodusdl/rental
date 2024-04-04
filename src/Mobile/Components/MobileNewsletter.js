import React from 'react'
import Style from './css/MobileNewsletter.module.css'

export default function MobileNewsletter() {
  return (
    <div className={Style.newsletter}>
        <p className={Style.title}>Newsletter</p>
        <div className={Style.email_box}>
          <input className={Style.input_box} type="email" placeholder="E-mail" required/><button className={Style.input_button}type="submit">submit</button>
        </div>
    </div>
  )
}
