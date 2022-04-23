import React from 'react'

const StaffProfile = ({image, name, title, quote}) => {
	return (
		<div className="w-full md:w-1/2 p-4">
  		<div className="flex flex-col space-y-4 h-full items-center rounded-lg bg-white">
        <img src={image} className="w-full object-cover rounded-lg hover:scale-105 transition-all" alt="staff image"/>
        <div className="px-4 space-y-4 flex flex-col">
          <p className="text-2xl">{name}</p>
          <p className="text-xl">{title}</p>
  {(() => {
    if (quote + "" != "") {
    	return <p className="text-slate-800 italic">"{quote}"</p>
		} else {
      return <p className="text-slate-800 italic">Quote coming soon!</p>
    }
  })()}
     		</div>
        <div/>
      </div>
    </div>
	);
}

export default StaffProfile;
