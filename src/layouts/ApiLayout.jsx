import { useState } from 'react'
import { Outlet } from 'react-router'
import Footer from '../Footer.jsx'
import Navbar from '../Navbar.jsx'

function ApiLayout() {
  return (
    <div className="w-full min-h-screen bg-slate-200 flex flex-col items-center justify-between z-0">
      <div className="w-full sticky top-0">
      	<Navbar/>
      </div>

      <div className="flex flex-row justify-between w-full">
      	<div className="w-1/3 h-screen sticky top-0 bg-red-100">
      		<p>API Index</p>
      	</div>
        <div className="w-full p-10 items-start py-4 space-y-4">
          <Outlet/>
        </div>
   		</div>

      <div className="w-full">
        <Footer/>
      </div>
    </div>
  )
}

export default ApiLayout;
