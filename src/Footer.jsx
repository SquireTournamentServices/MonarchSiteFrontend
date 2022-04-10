import React from "react"
import logo from './img/Monarch_Color_splatter.png'

const Footer = ({}) => {
  return (
		<div className="w-full flex flex-col space-y-4 rounded bg-slate-300 p-5 items-center">
      <div className="w-fit flex flex-row items-center space-x-10">
      		<div className="flex-none flex flex-col">
      			<p>Source Code @ Github</p>
      			<p>Updates @ Reddit</p>
      			<p>Help @ Discord</p>
     			</div>
     			<div className="flex-none flex flex-col">
     				<p>Legal</p>
     				<p>Privacy</p>
     			  <p>Licence</p>
   				</div>
  		</div>
					
 		  <div className="w-fit flex-1 flex flex-row items-center space-x-4">
        <img src={logo} className="max-h-24 mx-auto" alt="logo" />
        <p>Copyright Monarch 2022</p>
      </div>
		</div>
	);
};

export default Footer;

