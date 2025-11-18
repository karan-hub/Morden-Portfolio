import React from 'react'
import { FileBadge, Calendar, Link } from 'lucide-react';

function CertificationsCard({ certificate }) {
    const { title, link, date, provider, skills } = certificate;

    return (
        <div className='flex w-full  mt-4 flex-col sm:flex-row  gap-1 my-2  py-2 border-b-4 border-dotted  border-[#D8D8D8] '>
            <div className="flex w-full  flex-col">
                <div className="flex   items-start   mb-2  ">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center">
                        <FileBadge className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex flex-col ml-2">
                        <h3 className='capitalize   text-sm sm:text-md  text-gray-700'>{title}</h3>
                        <h1 className='capitalize  sm:text-xl   text-xl  font-semibold  mb-2'>{provider}</h1>
                    </div>
                </div>

                <div className="flex gap-2 flex-wrap ">
                    {skills.map((val, idx) => (
                        <h3 key={idx} className='sm:py-1 sm:px-2 py-1 px-2 text-gray-700  bg-[#D8D8D8] hover:bg-gray-200 text-sm font-medium  rounded-lg transition-colors duration-200'>{val}</h3>
                    ))}
                </div>
            </div>
            <div className="sm:text-end text-justify sm:items-end mt-2 sm:justify-center gap-2 sm:w-3/5 flex flex-col">

                {link && (
                    <a
                        href={link}
                        target="_blank"
                        className="flex items-center gap-2 text-gray-600 text-sm hover:text-black transition"
                    >
                        <FileBadge className="w-4 h-4" />
                        <span>View Certificate</span>
                    </a>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-500 border-t border-gray-200 pt-2">
                    <Calendar className="w-4 h-4" />
                    <span>{date}</span>
                </div>

            </div>

        </div>
    )
}

export default CertificationsCard
