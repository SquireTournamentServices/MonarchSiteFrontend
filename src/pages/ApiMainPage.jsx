import React from "react"
import TextHeader from "../components/TextHeader.jsx"

const ApiMainPage = () => {
	return (
		<div className="w-full flex flex-col min-h-screen space-y-4">
       <TextHeader text="API Documentation"/>
       <p>
       		All of the documentation for tournament information, articles, Squire ID and, Squire Core can 
       		be found here. If you still need help then do join the <a href="https://discord.gg/XBeMBHhM3Y" className="text-blue-600">Development Discord</a>.
       		Please report any issues with this documentation <a href="https://github.com/MonarchDevelopment/MonarchSiteFrontend/issues" className="text-blue-600">here</a>.
       </p>
  	</div>
	)
}

export default ApiMainPage;
