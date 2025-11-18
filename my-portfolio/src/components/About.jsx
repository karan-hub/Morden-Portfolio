import { useState } from 'react';

function About({about}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='flex flex-col  max-w-6xl mx-auto pt-8 pb-2 border-b border-gray-400'>
      <h1 className='font-bold text-2xl pb-4 md:text-3xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>
        About Me
      </h1>
      
      <section className={`text-justify text-base md:text-lg leading-relaxed text-gray-700 text-pretty transition-all duration-300 ${isExpanded ? '' : 'line-clamp-4'}`}>
        {about.paragraph}
      </section>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className='text-blue-600 hover:text-blue-700 font-medium text-sm self-start flex items-center   transition-colors'
      >
        {isExpanded ? (
          <>
            Read less
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </>
        ) : (
          <>
            Read more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>
    </div>
  )
}

export default About