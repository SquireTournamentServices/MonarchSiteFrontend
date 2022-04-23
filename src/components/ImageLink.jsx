import React from "react"
import TextHeader from '../components/TextHeader.jsx'

const ImageLink = ({src, href, text}) => {
  return (
    <div className="flex flex-row space-x-4 px-4">
     	<a href={href}><img src={src} className="max-h-8 hover:scale-110 transition-all"/></a>
     	<a href={href}><TextHeader text={text}/></a>
    </div>
  );
}

export default ImageLink;
