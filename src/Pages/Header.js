import React, { useEffect, useRef, useState } from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Header() {

    const allMenu=[
        {index:0, name:'소개', path:'/brand', subMenuList:[{index:0, name:'브랜드', path:'/'},{index:1, name:'연혁', path:'/'}]},
        {index:1, name:'이용안내', path:'/howto', subMenuList:[{index:2, name:'정기 구독권', path:'/'}, {index:3, name:'일일 구독권', path:'/'}]},
        {index:2, name:'자전거', path:'/product', subMenuList:[{index:4, name:'성인', path:'/'},{index:5, name:'주니어', path:'/'},{index:6, name:'전기', path:'/'},{index:7, name:'산악', path:'/'}]},
        {index:3, name:'문의/FAQ', path:'/customer', subMenuList:[{index:8, name:'공지사항', path:'/'},{index:9, name:'문의하기', path:'/'},{index:10, name:'자주하는 질문', path:'/'}]}
    ]
    
    const [ selectedMenu, setSelectedMenu ] = useState ('')
    
    const changeMenu=(menu)=>{
        setSelectedMenu(menu)
    }

    const headerWrap=useRef()
    const mainMenu=useRef([])
    const subMenu=useRef([])

    useEffect(()=>{
        //alert('test')
        for(const item of subMenu.current){
            // item.addEventListener('mouseenter' ,()=>{
            //     alert("test")
            // })
            item.style.opacity=0
            item.style.display='none'
        }
        headerWrap.current.style.height='70px'
    },[])

    const openSubMenu=()=>{
        gsap.killTweensOf(headerWrap.current)
        gsap.to(headerWrap.current, {height:270, duration:.6})
        gsap.killTweensOf(subMenu.current)
        gsap.to(subMenu.current, {display:'block', delay:0.1, opacity:1})
    }

    const closeSubMenu=()=>{
        gsap.killTweensOf(subMenu.current)       
        gsap.set(subMenu.current, {opacity:0, display:'none'})
        gsap.killTweensOf(headerWrap.current)
        gsap.to(headerWrap.current, {height:70})
    }


  return (
    <div className={Style.header_wrap} ref={headerWrap} onMouseLeave={closeSubMenu}>
        <header className={Style.header}>
            <h1 className={Style.logo} onClick={()=>{
                                    changeMenu(null)
                                }}><Link to='/'><img src="/images/logo.png" alt="logo"/></Link></h1>
            <nav className={Style.mainmenu}>
                <h2 className='hidden'>메인메뉴</h2>
                <ul className={Style.mainmenu_list}>
                    {
                        allMenu.map((item)=>{
                            return (
                                <li className={item.name===selectedMenu && Style.selected} ref={(el)=>{
                                    mainMenu.current[item.index]=el
                                }} onClick={()=>{
                                    changeMenu(item.name)
                                }} onMouseEnter={openSubMenu}>
                                {
                                    item.subMenuList.length < 1 ?
                                    <>
                                        <Link to={item.path}>{item.name}</Link>
                                    </>
                                    :
                                    <>
                                    <Link to={item.path}>{item.name}</Link>
                                        <ul className={Style.submenu_list}>
                                            {
                                                item.subMenuList.map((item)=>{
                                                    return(
                                                        <li ref={(el)=>{
                                                            subMenu.current[item.index]=el
                                                        }}>{item.name}</li>
                                                    )
                                                })
                                            }
                                        </ul>

                                    </>
                                }
                                </li>
                            )
                        })
                    }

                </ul>

                {/* <ul className={Style.mainmenu_list}>
                    <li>
                        <a href="#;">소개</a>
                        <ul className={Style.submenu_list}>
                            <li><a href="#;">브랜드</a></li>
                            <li><a href="#;">연혁</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#;">이용안내</a>
                        <ul className={Style.submenu_list}>
                            <li><a href="#;">안전수칙</a></li>
                            <li><a href="#;">대여 방법</a></li>
                            <li><a href="#;">대여소 현황</a></li>
                            <li><a href="#;">이용권 구매</a></li>
                        </ul>
                    </li>
                    <li className={Style.selected}>
                        <Link to='/product'>자전거</Link>
                        <ul className={Style.submenu_list}>
                            <li><a href="#;">성인 자전거</a></li>
                            <li><a href="#;">주니어 자전거</a></li>
                            <li><a href="#;">전기 자전거</a></li>
                            <li><a href="#;">산악 자전거</a></li>
                        </ul>
                    </li>
                    <li>
                        <Link to='/faq'>문의/FAQ</Link>
                        <ul className={Style.submenu_list}>
                            <li><a href="#;">공지사항</a></li>
                            <li><a href="#;">문의하기</a></li>
                            <li><a href="#;">자주하는 질문</a></li>
                        </ul>
                    </li>
                </ul> */}

            </nav>
            <div className={Style.map}>
                <img src="/images/location.png" alt="location"/>
                <p>대여소 현황보기</p>
            </div>

        </header>
    </div>
  )
}
