import React from 'react'
import { information } from '../data/portfolioData'
import { MapPinCheckInside, Phone } from 'lucide-react';
import * as Icons from 'lucide-react';

const Hero = ({ information }) => {

    const { name, domain, summary, contact } = information
    const { location, email, phone, links } = contact

    return (
        <div className='flex flex-col items-center gap-6 px-4 py-8 '>
            <h1 className="uppercase text-center font-bold antialiased w-full max-w-4xl text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight  ">
                {name}
            </h1>
            
            <p className="capitalize w-full max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-700 ">
                {domain}
            </p>
            
            <div className="w-full max-w-4xl text-center text-sm sm:text-base md:text-lg leading-relaxed text-gray-600  ">
                {summary}
            </div>
            
            <div className="flex flex-row flex-wrap justify-center sm:justify-evenly items-center gap-x-8 gap-y-4 sm:gap-6 md:gap-8 w-full max-w-4xl   ">
                <a className="flex  cursor-pointer items-center gap-2 text-sm md:text-base hover:text-blue-600 transition-colors duration-200">
                    <MapPinCheckInside className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{location}</span>
                </a>
                
                <a className="flex cursor-pointer items-center gap-2 text-sm md:text-base hover:text-blue-600 transition-colors duration-200">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{phone}</span>
                </a>

                {links.map((item, idx) => {
                    const IconComponent = Icons[item.icon];
                    return (
                        <a
                            key={idx}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm md:text-base hover:text-blue-600 transition-colors duration-200"
                        >
                            <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                            <span>{item.name}</span>
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default Hero