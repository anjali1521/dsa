import React from 'react'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

export const ContactUsComp = () => {
  return (
   <div class="grid grid-cols-3 gap-3 bg-yellow-400 ">
    <div className="flex justify-left h-14 ">
        <div className="flex items-center">
            <PiPhoneCallFill size={25}/>
            <p className="text-sm ml-2">+91 123 4567890</p>
            <MdEmail size={25} className="ml-5"/>
            <p className="text-sm ml-2">info@gmail.com</p>
        </div>
    </div>
    <div className="flex justify-end h-14 items-center">
        <a href="#">
            {" "}
            <FaInstagram size={22} className="ml-10"/>
        </a>
        <a href="#"> 
            {" "}
            <FaTwitter size={22}className="ml-2"/>
        </a>
    </div>
   </div>
);
};
