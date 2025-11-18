import React from 'react'

function EducationCard({ education }) {

    const { degree, institution, year, score, skills, description } = education;

    return (
        <div className='flex w-full  flex-col sm:flex-row gap-1 my-2  py-2 border-b-4 border-dotted  border-[#D8D8D8] '>
            <div className="flex  flex-col sm:w-2/5 h-fit  ">
                <h3 className='capitalize my-4 sm:text-md  text-gray-700'>{degree}</h3>
                <h1 className='capitalize  sm:text-xl  text-2xl font-semibold  mb-2'>{institution}</h1>
               <div className="flex gap-2 flex-wrap ">
                 {skills.map((val, idx) => (
                    <h3 key={idx} className='sm:py-2 sm:px-4 py-1 px-3 text-gray-700  bg-[#D8D8D8] hover:bg-gray-200 text-sm font-medium  rounded-lg transition-colors duration-200'>{val}</h3>
                ))}
               </div>

            </div>
            <div className="sm:text-end text-justify sm:items-end  mt-2  sm:justify-center gap-2 sm:w-3/5  flex flex-col">
                <p>{description}</p>
                <h3 className='italic text-sm font-normal text-gray-700'>{year}</h3>
            </div>
        </div>
    )
}

export default EducationCard
