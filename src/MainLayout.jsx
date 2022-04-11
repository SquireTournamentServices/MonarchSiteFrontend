import { useState } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'
import logo from './img/Monarch_Color_splatter.png'

function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-slate-100 flex flex-col items-center justify-between space-y-4">
      <div className="flex-start w-full">
      	<Navbar/>
      </div>

      <Outlet/>

      <div className="flex-end w-full">
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
