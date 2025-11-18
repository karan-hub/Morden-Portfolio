import React from 'react'
import { Award, Calendar } from 'lucide-react';

function AchievementsCard({ achievement }) {
    const { title, organization, date, description, tags } = achievement;
    return (
        <div className='flex w-full  flex-col  gap-1    py-2  mb-4  '>
            <div className="flex items-start gap-4 mb-2 ">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div className=" flex-1 min-w-0">
                    <h1 className='text-xl md:text-2xl font-semibold text-gray-900   leading-tight'>{title}</h1>
                    <h3 className='text-sm md:text-base text-gray-600 font-medium'> {organization} </h3>
                </div>
            </div>

            {/* painding */}
            <div className="flex flex-wrap gap-2 mb-3 ">
                {tags.map((val, idx) => (
                    <h3 key={idx} className='sm:py-1 sm:px-2 py-1 px-2 text-gray-700  bg-[#D8D8D8] hover:bg-gray-200 text-sm font-medium  rounded-lg transition-colors duration-200'>{val}</h3>
                ))}
            </div>
            <div className=" text-sm md:text-base text-gray-700 leading-relaxed mb-3 ">
                {description}

            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 pt-2 border-t border-gray-200">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
            </div>
        </div>
    )
}

export default AchievementsCard
