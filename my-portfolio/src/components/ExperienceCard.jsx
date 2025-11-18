import React from 'react'
import { Rocket } from 'lucide-react';

function ExperienceCard({ experience }) {
    const { role, company, location, period, responsibilities, skills } = experience;


    return (
        <div className=' w-full sm:w-1/2 h-fit  border rounded-xl  mt-3  border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div
                className="w-full    h-60 flex flex-col bg-[#F1F1F1]  border-gray-200 rounded-t-lg  items-center justify-center 
               bg-[url('https://www.artfolio.tech/placeholder.svg')] 
               bg-cover bg-center bg-no-repeat"
            >
            </div>

            <div className="px-4 ">
                <h1 className='capitalize mt-3 sm:text-md  text-gray-600'>{company}</h1>
                <div className=" flex justify-between sm:flex-row flex-col"> <h1 className='capitalize  sm:text-xl  text-1xl font-semibold  sm:mb-2'>{role}</h1>
                    <h1 className='italic text-sm font-normal text-gray-700'>{location} {period}</h1>
                </div>
                <div className="px-4 mt-1 border-b  border-gray-200">
                    {
                        responsibilities.map((item, idx) => (
                            <li className=' text-md   my-1 text-gray-600' key={idx}>{item}</li>
                        ))
                    }
                </div>
                <div className=" flex flex-row flex-wrap gap-1 my-3">
                    {
                        skills.map((item, idx) => (
                            <h3 key={idx} className='sm:py-1 sm:px-3 py-1 px-2 text-gray-700  bg-[#D8D8D8] hover:bg-gray-200 text-xs font-medium  rounded-lg transition-colors duration-200'>{item}</h3>

                        ))
                    }
                </div>
            </div>


        </div>

    )
}

export default ExperienceCard
