import React, { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import Style from './css/MobileHeader.module.css'
import { CiMenuBurger } from "react-icons/ci";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function MobileHeader() {

  const mainMenuList=[ 
    {index:0, name:'Home', path:'/', subMenuList:[]},
    {index:1, name:'소개', path:'/', subMenuList:[{index:0, name:'브랜드', path:'/mobile/brand'},{index:1, name:'연혁', path:'/'}]},
    {index:2, name:'이용안내', path:'/', subMenuList:[{index:0, name:'정기 구독권', path:'/'}, {index:1, name:'일일 구독권', path:'/'}]},
    {index:3, name:'자전거 카테고리', path:'/', subMenuList:[{index:0, name:'전체 보기', path:'/mobile/product'}, {index:1, name:'성인', path:'/'},{index:2, name:'주니어', path:'/'}, {index:3, name:'산악', path:'/'}, {index:4, name:'전기', path:'/'}]},
    {index:4, name:'문의/FAQ', path:'/', subMenuList:[{index:0, name:'고객문의', path:'/mobile/customer'},{index:1, name:'공지사항', path:'/'} ,{index:2, name:'자주하는 질문', path:'/'}]}
  ]

  const menuWrap=useRef();
  const menuBtn=useRef();
  const closeBtn=useRef();
  const grayLayer=useRef();

  useEffect(()=>{
    grayLayer.current.style.display='none'
    menuWrap.current.style.left='-70vw'
    menuWrap.current.style.display='none'
  },[])

  const menuOpen=useCallback(()=>{
    gsap.set('body,html', {overflow:'hidden'})
    menuWrap.current.style.display='block'
    grayLayer.current.style.display='block'
    gsap.to(menuWrap.current, {left:0, duration:0.5, ease:'power1.out'})
  }, [])

  const menuClose=()=>{
    grayLayer.current.style.display='none'
    gsap.to(menuWrap.current, {left:'-70vw', duration:0.5, ease:'power1.out',
        onComplete:()=>{
        menuWrap.current.style.display='none'
        gsap.set('body,html', {overflow:'visable'})
    }})
    setSelectedIndex(null)
  }

  const [selectedIndex, setSelectedIndex] = useState(null)

  const menuActiveIndex=(index)=>{
      setSelectedIndex(index)
  }

  return (
  <header className={Style.header}>
    <Link to='/'><h1><img src="/images/mobile_logo.png" alt="logo"/></h1></Link>
    <nav className={Style.mobile_menu} ref={menuBtn} onClick={menuOpen}>
        <h2 className='hidden'>메인메뉴</h2>
        <CiMenuBurger/>
    </nav>
    <div className={Style.mobile_location}><FaMapMarkerAlt /></div>
    <nav id={Style.mobilemenu} ref={menuWrap} >
      <div id={Style.mobilemenu_inner}>
        <p>환영합니다.<br/>로그인 해주세요.
            <span id={Style.mobileclose_btn} ref={closeBtn} onClick={menuClose}><img src="/images/closebtn.png" alt="닫기"/></span>
        </p>
        <ul id={Style.mobileloginmenu}>
            <li>로그인</li>
            <li>회원가입</li>
        </ul>
          <ul id={Style.mobilemenu_list}>
            {
              mainMenuList.map((item)=>{
                return(
                  <>
                  <li className={`${item.index===selectedIndex && Style.selected}`} style={item.index===selectedIndex ? {height:55+(55*item.subMenuList.length)} : {height:55}} onClick={()=>{
                    menuActiveIndex(item.index!==selectedIndex ? item.index : null)
                  }}>
                    {item.subMenuList.length < 1 ?
                      <>
                        {item.name}
                      </>
                      :
                      <>
                        {item.name}
                        <span className={Style.mobile_icon}><img src="/images/mobilemenu_icon04.png" alt=""/></span>
                        <ul className={Style.mobilesubmenu_list}>
                          {
                            item.subMenuList.map((item)=>(
                              <Link to={item.path}><li onClick={menuClose}>{item.name}</li></Link>
                            ))
                          }
                        </ul>
                      </>
                  }
                  </li>
                </>
              )
              })
            }
          </ul>
      </div>
  </nav>
  <div id={Style.mobile_grayLayer} ref={grayLayer}></div>
</header>
  )
}
