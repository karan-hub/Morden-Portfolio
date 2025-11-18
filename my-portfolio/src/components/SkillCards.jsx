import React from 'react'
import { Play } from 'lucide-react';

const SkillCards = ({ title, items }) => {
    return (
        <div className='bg-[#F1F1F1] border  border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300'>
            <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-2 rounded-lg">
                    <Play className="w-6 h-6 text-blue-600 " fill="currentColor" />
                </div>
                <h2 className="font-semibold text-lg capitalize text-gray-800">{title}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                    <span
                        key={i}
                        className='bg-[#D8D8D8] hover:bg-gray-200 text-gray-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-200'
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default SkillCards