import React from "react"
import logo from './img/Monarch_Color_splatter.png'

const Footer = ({}) => {
  return (
		<div className="w-full flex flex-col space-y-4 rounded bg-slate-300 p-5 px-4 md:px-20 items-center">
      <div className="w-fit flex flex-row items-center space-x-10 md:space-x-20 text-blue-800 text-center">
     		<div className="flex-none flex flex-col">
     			<a href="https://github.com/MonarchDevelopment/MonarchSiteFrontend">Source Code @ Github</a>
     			<a href="changeme">Updates @ Reddit</a>
     			<a href="changeme">Help @ Discord</a>
   			</div>
   			<div className="flex-none flex flex-col">
   				<a href="/legal">Legal</a>
   				<a href="/privacy">Privacy</a>
   			  <a href="https://github.com/MonarchDevelopment/MonarchSiteFrontend/blob/main/LICENSE">Licence</a>
 				</div>
  		</div>
					
 		  <div className="w-fit flex-1 flex flex-row items-center space-x-4">
        <img src={logo} className="max-h-12 md:max-h-24 mx-auto" alt="logo" />
        <div className="flex flex-col space-y-4">
          <p>Copyright Monarch 2022, all tournamnet data is collected inline with out privacy policy.</p>
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
