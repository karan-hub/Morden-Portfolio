import React from 'react'
import ExperienceCard from './ExperienceCard'

function Experience({ experience }) {
    return (
        <div>
            <div className="px-2 mt-7 pb-10 flex  flex-col  gap-3   ">
                <h1 className='capitalize mt-10 sm:text-lg md:text-xl lg:text-2xl text-gray-700'>Experience</h1>
                <p className=' text-4xl sm:text-5xl font-medium'>Platforms that gave <br />
                    a chance to grow.</p>
                <div className="flex flex-col sm:flex-row gap-5">
                    {
                        experience.map((item, idx) => (
                            <ExperienceCard key={idx} experience={item} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Experience
