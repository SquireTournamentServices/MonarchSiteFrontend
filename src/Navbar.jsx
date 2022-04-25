import React from "react"
import { Link } from "react-router-dom"
import logo from './img/Monarch_Color_splatter.png'

const Navbar = ({}) => {
  return (
		<div className="w-full flex flex-row space-x-2 md:space-x-10 bg-slate-800 p-5 px-20 items-center text-xl md:text-3xl text-white">
      <Link to='/' className="flex flex-row items-center space-x-4">
        <img src={logo} className="max-h-12 md:max-h-18 mx-auto hover:scale-110 transition-all" alt="logo"/>
        <h1 className="text-3xl md:text-5xl">Monarch</h1>
      </Link>

      <div className="px-5 flex flex-row flex-wrap space-x-2 md:space-x-10">
        <Link to="/data">cEDH Data</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/events">Events</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/content">Content</Link>
   		</div>
		</div>
	);
};

export default Navbar;
