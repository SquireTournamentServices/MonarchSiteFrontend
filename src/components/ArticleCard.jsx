import React from 'react'
import { Link } from 'react-router-dom'
import TextHeader from './TextHeader.jsx'

const ArticleCard = ({title, link, desc, image}) => {
	return (
    <div className="w-full md:w-1/2 p-4">
      <div className="space-x-4 flex flex-row space-x-4 bg-white rounded-lg justify-between hover:scale-105 transition-all shadow-lg">
        <div className="w-3/4 space-y-4 flex flex-col p-4">
        	<Link to={link}>
            <TextHeader text={title}/>
            <p>{desc}</p>
          </Link>
        </div>
    
       	<Link className="flex justify-end max-h-[40]" to={link}>
      	  <img className="object-cover aspect-square h-full rounded-lg" src={image}/>
        </Link>
      </div>
		</div>
	)
}

export default ArticleCard;
