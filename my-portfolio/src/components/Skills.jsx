import React from 'react'
import SkillCards from './SkillCards'
import { Slash } from 'lucide-react'

function Skills({ skills }) {


  return (
    <div className='px-2 mt-7 pb-10 flex flex-col gap-3 border-b  border-gray-400'>
      <h1 className='capitalize mt-10 sm:text-lg md:text-xl lg:text-2xl text-gray-700'>Skils</h1>
      <p className=' text-4xl sm:text-5xl font-medium'>Tools needed to <br />get work done.</p>
      <div className=" mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {
        Object.entries(skills).map(([category, items]) => (
          <SkillCards
            key={category}
            title={category}
            items={items}
          />
        ))
      }
      </div>
      

    </div>
  )
}

export default Skills
