import React from 'react';
import HoursComp from "../Components/HoursComp"
import Socials from "../Components/Socials"
import usePageTitle from '../Hooks/usePageTitle';
const Hours = () => {
    usePageTitle('Hours of Cannapa');
    return (
        <div>
            <div className='bg-gray-100 '>
                <div className='font-[500] text-left w-[80%] mx-auto text-[2rem]  lg:text-[3rem] text-gray-400 py-8'>
                Hours
                </div>
               
            </div>
          <div className='mt-4'>

      
            <HoursComp heading=" Monday" text=' 11:00 am to 9:00 pm'/>
            <HoursComp heading=" Tuesday" text=' 11:00 am to 9:00 pm'/>
            <HoursComp heading=" Wednesday" text=' 11:00 am to 9:00 pm'/>
            <HoursComp heading=" Thursday" text=' 11:00 am to 9:00 pm'/>
            <HoursComp heading=" Friday " text=' 11:00 am to 10:00 pm'/>
            <HoursComp heading="Saturday" text=' 11:00 am to 10:00 pm'/>
            <HoursComp heading="Sunday" text=' 11:00 am to 9:00 pm'/>

            </div>
            <div className=' w-[80%] mx-auto py-4' >
            <Socials/>
            </div>
            <div className='border-t-2 mt-8 pb-16 pt-8'>
            Copyright © 2024 Cannapa THCA Dispensary - All Rights Reserved.
            </div>
            
         



        </div>

    );
};

export default Hours;
