import React from "react"
import logo from './img/Monarch_Color_splatter.png'

const Navbar = ({}) => {
  return (
		<div className="w-full flex flex-row space-x-2 md:space-x-10 bg-slate-300 p-5 px-20 items-center text-xl md:text-3xl">
      <a href='/' className="flex flex-row items-center space-x-4">
        <img src={logo} className="max-h-12 md:max-h-18 mx-auto hover:scale-110" alt="logo"/>
        <h1 className="text-3xl md:text-5xl">Monarch</h1>
      </a>
      <a href="/data">cEDH Data</a>
      <a href="/articles">Articles</a>
      <a href="/events">Events</a>
      <a href="/resources">Resources</a>
      <a href="/content">Content</a>
		</div>
	);
};

export default Navbar;
