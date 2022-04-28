import React from 'react'

const PageNotFound = () => {
	return (
		<div className="flex flex-col justify-center items-center space-y-4">
      <p className="text-4xl">404 Page Not Found</p>
      <p className="text-xl">Well this is embarassing, if this is an issue please report it <a href="https://github.com/MonarchDevelopment/MonarchSiteFrontend/issues" className="text-blue-600">here</a>.</p>
		</div>
	)
}

export default PageNotFound;
