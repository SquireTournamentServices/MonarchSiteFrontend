import React from 'react'

const StaffProfile = ({image, name, title, quote}) => {
	return (
		<div className="flex flex-col m-4 space-y-4 w-1/3 h-full items-center rounded-lg bg-white">
      <img src={image} className="w-full object-cover rounded-lg hover:scale-110" alt="staff image"/>
      <div className="px-4 space-y-4 flex flex-col">
        <p className="text-2xl">{name}</p>
        <p className="text-xl">{title}</p>
        <p className="text-slate-800 italic">"{quote}"</p>
   		</div>
      <div/>
    </div>
	);
}

export default StaffProfile;
