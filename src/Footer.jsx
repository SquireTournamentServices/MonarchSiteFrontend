import React from "react"
import { Link } from "react-router-dom"
import logo from './img/Monarch_Color_splatter.png'

const Footer = ({}) => {
  return (
		<div className="w-full flex flex-col space-y-4 bg-slate-800 p-5 px-4 md:px-20 items-center text-white">
      <div className="w-fit flex flex-row items-center space-x-10 md:space-x-20 text-blue-200 text-center">
     		<div className="flex-none flex flex-col">
     			<a href="https://github.com/MonarchDevelopment/">Source Code @ Github</a>
     			<a href="https://www.youtube.com/channel/UCE5ysuTXyfl0tu1303tZJGQ">VOD @ YouTube</a>
     			<a href="https://www.twitch.tv/monarchmedia">Streams @ Twitch</a>
     			<a href="https://discord.com/invite/6EQq2Py">Join our @ Discord</a>
   			</div>
   			<div className="flex-none flex flex-col">
          <Link to="/about-us">About Us</Link>
   				<Link to="/legal">Legal</Link>
   				<Link to="/privacy">Privacy</Link>
   			  <a href="https://github.com/MonarchDevelopment/MonarchSiteFrontend/blob/main/LICENSE">Licence</a>
 				</div>
 				<div className="flex-none flex flex-col">
 					<a href="https://discord.gg/XBeMBHhM3Y">Monarch Development Discord</a>
 					<a href="https://discord.com/oauth2/authorize?client_id=784967512106074183&scope=bot&permissions=8">Squire Bot Discord Invite</a>
 					<a href="https://github.com/MonarchDevelopment/SquireDesktop">Squire Desktop App</a>
 					<Link to="/api/">API Docs</Link>
				</div>
  		</div>
					
 		  <div className="w-fit flex-1 flex flex-row items-center space-x-4">
        <img src={logo} className="max-h-12 md:max-h-24 mx-auto" alt="logo"/>
        <div className="flex flex-col space-y-4">
          <p>Copyright Monarch 2022, all tournamnet data is collected inline with our privacy policy.</p>
          <p>Portions of Monarch&apos;s Site are unofficial Fan Content permitted under the Wizards of the
          Coast Fan Content Policy. The literal and graphical information presented on this site about 
          Magic: The Gathering, including card images, the mana symbols, and Oracle text, is copyright
          Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc. Monarch is not produced by, endorsed by, or
          affiliated with Wizards of the Coast.</p>
        </div>
      </div>
		</div>
	);
};

export default Footer;
