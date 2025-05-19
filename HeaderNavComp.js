import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderNavComp = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div className='flex justify-right col-span-1 p-1'>
        <div>
          <p className='text-2xl font-bold text-white'>FlyAway</p>
          <p className='text-sm text-white text-center'>BUDGET</p>
        </div>
      </div>
      <div className='col-span-3 p-2 flex justify-end'>
        <Link to="/" className='ml-4'>
          <div className="pb-0.5 border-b-2 border-transparent hover:border-yellow-400">
            <p className='text-white'>HOME</p>
          </div>
        </Link>
        <Link to="/about" className='ml-4'>
          <div className="pb-0.5 border-b-2 border-transparent hover:border-yellow-400">
            <p className='text-white'>ABOUT US</p>
          </div>
        </Link>
        <Link to="/booking" className='ml-4'>
          <div className="pb-0.5 border-b-2 border-transparent hover:border-yellow-400">
            <p className='text-white'>FLIGHT BOOKING</p>
          </div>
        </Link>
        <Link to="/contact" className='ml-4'>
          <div className="pb-0.5 border-b-2 border-transparent hover:border-yellow-400">
            <p className='text-white'>GET IN TOUCH</p>
          </div>
        </Link>
        <Link to="/booking" className="ml-4">
          <div className="px-2 py-0.2 border-2 border-white rounded hover:border-yellow-400">
            <p className="text-white">FIND FLIGHT</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
