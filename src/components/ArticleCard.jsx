import React from 'react'
import TextHeader from './TextHeader.jsx'

const ArticleCard = ({title, link, desc, image}) => {
	return (
    <div className="w-full md:w-1/2 p-4">
      <div className="space-x-4 flex flex-row space-x-4 bg-white rounded-lg w-full justify-between">
        <div className="space-y-4 flex flex-col p-4 hover:scale-110">
        	<a href={link}>
            <TextHeader text={title}/>
            <p>{desc}</p>
          </a>
        </div>
    
        <div className="self-end">
        	<a href={link}>
        	  <img className="object-contain rounded-lg hover:scale-110" src={image}/>
          </a>
        </div>
      </div>
		</div>
	)
}

export default ArticleCard;
