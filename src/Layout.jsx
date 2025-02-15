import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import style from "./Css/Layout.module.css"


const Layout = () => {
  return (
    <>
        <div className={style.Layout}>
            <NavBar/>
            <div className={style.MainContent}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    
    </>
  )
}

export default Layout
