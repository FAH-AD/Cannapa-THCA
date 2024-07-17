import React from 'react';
import ContactSection from '../Components/ContactSection';
import usePageTitle from '../Hooks/usePageTitle';

const FindUs = () => {
    usePageTitle('Find Us - Cannapa');
    return (
        <div>
            <div className='bg-gray-100 '>
                <div className='font-[500] text-left w-[80%] mx-auto  text-[2rem]  lg:text-[3rem] text-gray-400 py-8'>
                Find & Contact Us
                </div>
               
            </div>
            <div className=" mx-auto mt-8 w-[80%]  shadow-md">
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.7390975048754!2d-78.6215864847674!3d35.8230432801597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5fd1b6ef96e5%3A0x809a948c77e8a8e2!2s1606%20N%20Market%20Dr%20Suite%20F%2C%20Raleigh%2C%20NC%2027609%2C%20USA!5e0!3m2!1sen!2s!4v1688953030589!5m2!1sen!2s"
    width="100%"
    height="400"
    allowFullScreen
    loading="lazy"
    title="Map"
    referrerPolicy="no-referrer-when-downgrade"
></iframe>
      </div>

      <ContactSection/>

      <div className='border-t-2 mt-8 pb-16 pt-8'>
            Copyright © 2024 Cannapa THCA Dispensary - All Rights Reserved.
            </div>
        </div>

    );
};

export default FindUs;
