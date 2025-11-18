import React from 'react'
import EducationCard from './EducationCard'


function Education({education}) {


    return (
        <div className='px-2 mt-7 pb-10 flex  flex-col  gap-3 border-b  border-gray-400'>
            <h1 className='capitalize mt-10 sm:text-lg md:text-xl lg:text-2xl text-gray-700'>Education</h1>
            <p className=' text-4xl sm:text-5xl font-medium'>Where it all
            <br />started.</p>
            <div className="">
                {
                    education.map((val, idx) => (
                        <EducationCard key={idx} education={val} />

                    ))
                }

            </div>
        </div>
    )
}

export default Education
