import { useState } from 'react'
import { Outlet } from 'react-router'
import { Link } from "react-router-dom"
import Footer from '../Footer.jsx'
import Navbar from '../Navbar.jsx'
import TextHeader from "../components/TextHeader.jsx"

function ApiLayout() {
  return (
    <div className="w-full min-h-screen bg-slate-200 flex flex-col items-center justify-between">
      <div className="w-full sticky top-0 z-10">
      	<Navbar/>
      </div>
      <div className="flex flex-row justify-between w-full">
      	<div className="w-1/3 h-screen sticky top-0 bg-slate-700 space-y-4 p-4 text-zinc-100">
      		<Link to="/api/"><TextHeader text="Api Docs"/></Link>
      	</div>
        <div className="w-full p-10 h-screen items-start py-4 space-y-4 overflow-y-scroll">
        	<Outlet />
        </div>
   		</div>

      <div className="w-full">
        <Footer/>
      </div>
    </div>
  )
}

export default ApiLayout;
