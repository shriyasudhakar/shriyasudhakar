import React from 'react'

const Experience = () => {
  return (
    <div id='experience' className='flex min-h-screen w-full flex-col items-center justify-center gap-20 p-14 md:p-20 lg:p-36'>
      <h1 className='text-center text-5xl font-light'>Experience</h1>

      <div className='flex flex-wrap gap-0 md:flex-nowrap md:gap-10'>
        <div className='flex-1'>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Google</h3>
            <p className='font-light text-lg text-gray-600'>STEP Intern Summer 2024</p>
            <p className='text-sm text-gray-600'>Intern on Mendel Lifecycle. Full-Stack project; worked on new feature to extend expiration date in a study file from WebUI. Feature created with Angular. Designed E2E workflow and wrote a Service to automatically edit study files using Go, RPC, ASTs, and other internal APIs. </p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-indigo-600'></span>
          </div>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Bloomberg LP</h3>
            <p className='font-light text-lg text-gray-600'>Summer 2022 High School SWE Intern</p>
            <p className='text-sm text-gray-600'>Created an interface that allows users to manage and request data from Bloomberg Law’s main data store product. Project used VueJS and PiniaStore for data and state management.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-indigo-600'></span>
          </div>
        </div>
        <div className='flex-1'>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Bloomberg LP</h3>
            <p className='font-light text-lg text-gray-600'>Summer 2023 High School SWE Intern</p>
            <p className='text-sm text-gray-600'>Worked on Bloomberg Holdings and Portfolios. Worked with NLP models to disambiguate and identify securities and financial instruments from fund-manager provided portfolios</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-indigo-600'></span>
          </div>
          <div className="relative space-y-1 border-l-2 p-8 text-left">
            <h3 className='text-xl font-semibold md:text-2xl'>Bloomberg LP</h3>
            <p className='font-light text-lg text-gray-600'>Summer 2021 High School SWE Intern</p>
            <p className='text-sm text-gray-600'>Worked on Bloomberg News R&D to evaluate and improve existing news translation models, focusing on accuracy monetary/number translations to ensure investors/Bloomberg Terminal clients receive accurate data.</p>
            <span className='absolute -left-[11px] top-10 h-5 w-5 rounded-full bg-indigo-600'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience