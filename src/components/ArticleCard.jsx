import React from 'react'
import TextHeader from './TextHeader.jsx'

const ArticleCard = ({title, link, desc, image}) => {
	return (
    <div className="w-full md:w-1/2 p-4">
      <div className="space-x-4 flex flex-row space-x-4 bg-white rounded-lg justify-between">
        <div className="w-3/4 space-y-4 flex flex-col p-4 hover:scale-105 transition-all">
        	<a href={link}>
            <TextHeader text={title}/>
            <p>{desc}</p>
          </a>
        </div>
    
       	<a className="flex justify-end max-h-[40]" href={link}>
      	  <img className="object-cover aspect-square h-full rounded-lg hover:scale-110 transition-all" src={image}/>
        </a>
      </div>
		</div>
	)
}

export default ArticleCard;
