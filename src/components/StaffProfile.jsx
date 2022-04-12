import React from 'react'

const StaffProfile = ({image, name, title, quote}) => {
	return (
		<div className="flex flex-col m-4 space-y-4 w-1/3 h-full items-center p-4 rounded-lg bg-slate-200">
      <img src={image} className="mx-auto h-64 max-h-64 hover:scale-110" alt="staff image"/>
      <p className="text-2xl">{name}</p>
      <p className="text-xl">{title}</p>
      <p>{quote}</p>
    </div>
	);
}

export default StaffProfile;
