
import React from 'react';
import {  FaInstagram } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="flex   items-center space-x-4">
     
      <a 
        href="https://www.instagram.com/cannaparaleigh?igsh=dmI5eTRubDk3MHJ6" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-500 text-white hover:bg-black p-2 rounded-md shadow-md transition-colors duration-300"
      >
        <FaInstagram size={30} className='hidden lg:block' />
        <FaInstagram size={20} className='block lg:hidden' />
      </a>
      {/* <a 
        href="info@cannapathca.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-500 text-white hover:bg-black p-2 rounded-md shadow-md transition-colors duration-300"
      >
               <FaGoogle size={30} className='hidden lg:block' />
               <FaGoogle size={20} className='block lg:hidden' />
      </a> */}
     
    </div>
  );
};

export default Socials;
