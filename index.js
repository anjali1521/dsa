import React from 'react'
import { ContactUsComp } from '../../components/ContactUsComp';
import { HeaderComp } from '../../components/HeaderComp';

export const Landing_page = () => {
  return (
    <div className='w-screen h-screen'>
      <ContactUsComp/>
      <HeaderComp/>
    </div>
  );
};
