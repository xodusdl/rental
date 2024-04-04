import React from 'react'
import MobileHeader from './MobileHeader'
import { Outlet } from 'react-router-dom'
import MobileFooter from './MobileFooter'

export default function MobileRoot() {
  return (
    <>
    <MobileHeader/>
        <Outlet/>
    <MobileFooter/>
    </>
  )
}
