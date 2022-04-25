import React from "react"
import { Link } from "react-router-dom"
import TextHeader from '../components/TextHeader.jsx'

const ImageLink = ({src, href, text}) => {
  return (
    <div className="flex flex-row space-x-4 px-4">
     	<Link to={href}><img src={src} className="max-h-8 transition-all hover:scale-110"/></Link>
     	<Link to={href}><TextHeader text={text}/></Link>
    </div>
  );
}

export default ImageLink;
