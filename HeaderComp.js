import React from 'react'
import AeroplaneImg from '../assets/airplaneview.png'
import { HeaderNavComp } from './HeaderNavComp';
import { FlightbookingComp } from './FlightbookingComp';

export const HeaderComp = () => {
  return (
    <div
      className='w-full h-[80%] bg-red-300' 
      style={{
      backgroundImage: `url(${AeroplaneImg})`,
      backgroundSize: 'auto 983px',
      backgroundRepeat:'2',
      backgroundPosition: 'left',
      //backgroundSize: 'cover',
  }}
  >
    <HeaderNavComp/>
    <div className="grid grid-cols-2 h-[80%]">
      <div className="flex p-5 items-center">
        <div>
          <p className='text-white text-xl'> FLYING BUDGET</p>
          <p className='text-white text-3xl'>We Are Very Realiable</p>
          <p className='text-yellow-400 text-3xl'>
            Proffessional,Experienced
          </p>
          <p className='text-white text-sm mt-3'>
          <span className='text-yellow-400' >FlyAway budget</span> is the 
            versatile website empowering you</p>
          <p className='text-white text-sm '>full service airline offering,
            <span className='text-yellow-400' >no hidden charges</span>
          </p>
        </div>
    </div>
        <div className='flex'>
          <FlightbookingComp/>
        </div>
       </div>
  </div>
);
};
