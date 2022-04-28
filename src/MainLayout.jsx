import { useState } from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

function MainLayout() {
  return (
    <div className="w-full min-h-screen bg-slate-200 flex flex-col items-center justify-between space-y-4">
      <div className="w-full sticky top-0 z-10">
      	<Navbar/>
      </div>

      <div className="w-full p-10 items-start">
        <Outlet/>
      </div>

      <div className="w-full">
        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout
